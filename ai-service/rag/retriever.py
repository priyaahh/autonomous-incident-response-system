"""
Hybrid RAG retriever combining vector and lexical search
Integrates ChromaDB (vector) and Elasticsearch (lexical)
"""

import logging
from typing import List, Dict, Any, Tuple
from chromadb.config import Settings as ChromaSettings
import chromadb
from elasticsearch import Elasticsearch

logger = logging.getLogger(__name__)


class RAGRetriever:
    """Hybrid RAG retriever for knowledge base search"""
    
    def __init__(self, settings):
        """Initialize vector and lexical search backends"""
        self.settings = settings
        
        # Initialize ChromaDB (vector store)
        try:
            chroma_settings = ChromaSettings(
                chroma_db_impl="duckdb+parquet",
                persist_directory=settings.chromadb_persist_dir,
                anonymized_telemetry=False
            )
            self.chroma_client = chromadb.Client(chroma_settings)
            self.vector_collection = self.chroma_client.get_or_create_collection(
                name="airs_knowledge_base"
            )
            logger.info("ChromaDB initialized")
        except Exception as e:
            logger.error(f"ChromaDB initialization failed: {e}")
            self.vector_collection = None
        
        # Initialize Elasticsearch (lexical search)
        try:
            self.es_client = Elasticsearch(
                hosts=[f"http://{settings.elasticsearch_host}:{settings.elasticsearch_port}"]
            )
            if self.es_client.ping():
                logger.info("Elasticsearch connected")
                self._create_es_index()
            else:
                logger.warning("Elasticsearch connection failed")
                self.es_client = None
        except Exception as e:
            logger.error(f"Elasticsearch initialization failed: {e}")
            self.es_client = None
    
    def _create_es_index(self):
        """Create Elasticsearch index if it doesn't exist"""
        index_name = f"{self.settings.elasticsearch_index_prefix}_documents"
        
        if not self.es_client.indices.exists(index=index_name):
            mapping = {
                "mappings": {
                    "properties": {
                        "content": {"type": "text"},
                        "source": {"type": "keyword"},
                        "doc_id": {"type": "keyword"},
                        "metadata": {"type": "object"},
                        "timestamp": {"type": "date"}
                    }
                }
            }
            self.es_client.indices.create(index=index_name, body=mapping)
            logger.info(f"Created Elasticsearch index: {index_name}")
    
    def hybrid_search(self, query: str, top_k: int = 5) -> List[Dict[str, Any]]:
        """
        Perform hybrid search combining vector and lexical results
        
        Args:
            query: Search query string
            top_k: Number of top results to return
            
        Returns:
            List of search results with scores
        """
        results = []
        
        # Vector search (ChromaDB)
        if self.vector_collection:
            try:
                vector_results = self.vector_collection.query(
                    query_texts=[query],
                    n_results=top_k
                )
                
                if vector_results and vector_results['ids']:
                    for i, doc_id in enumerate(vector_results['ids'][0]):
                        results.append({
                            "id": doc_id,
                            "content": vector_results['documents'][0][i],
                            "score": vector_results['distances'][0][i],
                            "source": "vector",
                            "metadata": vector_results.get('metadatas', [[]])[0][i] if vector_results.get('metadatas') else {}
                        })
            except Exception as e:
                logger.error(f"Vector search failed: {e}")
        
        # Lexical search (Elasticsearch)
        if self.es_client:
            try:
                index_name = f"{self.settings.elasticsearch_index_prefix}_documents"
                es_results = self.es_client.search(
                    index=index_name,
                    body={
                        "query": {"match": {"content": query}},
                        "size": top_k
                    }
                )
                
                for hit in es_results.get('hits', {}).get('hits', []):
                    results.append({
                        "id": hit['_id'],
                        "content": hit['_source'].get('content', ''),
                        "score": hit['_score'],
                        "source": "lexical",
                        "metadata": hit['_source'].get('metadata', {})
                    })
            except Exception as e:
                logger.error(f"Lexical search failed: {e}")
        
        # Deduplicate and rank results
        seen_ids = set()
        deduplicated = []
        for result in results:
            if result['id'] not in seen_ids:
                seen_ids.add(result['id'])
                deduplicated.append(result)
        
        # Sort by score and return top_k
        deduplicated.sort(key=lambda x: x['score'], reverse=True)
        return deduplicated[:top_k]
    
    def ingest_documents(self, documents: List[Dict[str, Any]]) -> Tuple[int, int]:
        """
        Ingest documents into knowledge base
        
        Args:
            documents: List of documents with 'id', 'content', 'source', 'metadata'
            
        Returns:
            Tuple of (ingested_count, failed_count)
        """
        ingested = 0
        failed = 0
        
        for doc in documents:
            try:
                doc_id = doc.get('id')
                content = doc.get('content', '')
                source = doc.get('source', 'unknown')
                metadata = doc.get('metadata', {})
                
                # Ingest to ChromaDB (vector store)
                if self.vector_collection:
                    self.vector_collection.add(
                        ids=[doc_id],
                        documents=[content],
                        metadatas=[metadata]
                    )
                
                # Ingest to Elasticsearch (lexical store)
                if self.es_client:
                    index_name = f"{self.settings.elasticsearch_index_prefix}_documents"
                    self.es_client.index(
                        index=index_name,
                        id=doc_id,
                        body={
                            "content": content,
                            "source": source,
                            "doc_id": doc_id,
                            "metadata": metadata,
                            "timestamp": metadata.get('timestamp', '')
                        }
                    )
                
                ingested += 1
                logger.debug(f"Ingested document: {doc_id}")
            except Exception as e:
                failed += 1
                logger.error(f"Failed to ingest document {doc.get('id')}: {e}")
        
        logger.info(f"Ingestion complete: {ingested} succeeded, {failed} failed")
        return ingested, failed
