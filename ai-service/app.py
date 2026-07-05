"""
Main Flask application for AIRS AI Service
Entry point for the multi-agent orchestration system
"""

import logging
from flask import Flask, jsonify, request
from flask_cors import CORS
from config import settings
from agents.orchestrator import AIOrchestrator
from rag.retriever import RAGRetriever

# Configure logging
logging.basicConfig(
    level=settings.log_level,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler(settings.log_file),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Initialize AI components
orchestrator = None
rag_retriever = None


def init_ai_components():
    """Initialize AI orchestrator and RAG retriever"""
    global orchestrator, rag_retriever
    try:
        orchestrator = AIOrchestrator(settings)
        rag_retriever = RAGRetriever(settings)
        logger.info("AI components initialized successfully")
    except Exception as e:
        logger.error(f"Failed to initialize AI components: {e}")
        raise


@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({"status": "healthy", "service": "airs-ai-service"}), 200


@app.route('/api/investigate', methods=['POST'])
def investigate_incident():
    """
    Trigger multi-agent investigation for an incident
    
    Request body:
    {
        "incident_id": "string",
        "logs": ["log entry 1", "log entry 2", ...],
        "alerts": ["alert 1", "alert 2", ...],
        "context": "optional context"
    }
    
    Returns:
    {
        "investigation_id": "string",
        "status": "in_progress|completed",
        "root_cause": "string",
        "risk_assessment": {...},
        "recommendations": [...]
    }
    """
    try:
        data = request.get_json()
        investigation_id = orchestrator.start_investigation(data)
        
        return jsonify({
            "investigation_id": investigation_id,
            "status": "in_progress"
        }), 202
    except Exception as e:
        logger.error(f"Investigation failed: {e}")
        return jsonify({"error": str(e)}), 500


@app.route('/api/investigate/<investigation_id>', methods=['GET'])
def get_investigation_status(investigation_id):
    """Get status of an ongoing investigation"""
    try:
        result = orchestrator.get_investigation_result(investigation_id)
        return jsonify(result), 200
    except Exception as e:
        logger.error(f"Failed to retrieve investigation: {e}")
        return jsonify({"error": str(e)}), 404


@app.route('/api/rag/search', methods=['POST'])
def rag_search():
    """
    Search knowledge base using hybrid RAG (vector + lexical)
    
    Request body:
    {
        "query": "string",
        "top_k": 5
    }
    
    Returns:
    {
        "results": [
            {"id": "string", "content": "string", "score": float, "source": "string"},
            ...
        ]
    }
    """
    try:
        data = request.get_json()
        query = data.get("query")
        top_k = data.get("top_k", 5)
        
        results = rag_retriever.hybrid_search(query, top_k)
        
        return jsonify({
            "results": results,
            "query": query,
            "count": len(results)
        }), 200
    except Exception as e:
        logger.error(f"RAG search failed: {e}")
        return jsonify({"error": str(e)}), 500


@app.route('/api/rag/ingest', methods=['POST'])
def rag_ingest():
    """
    Ingest documents into the knowledge base
    
    Request body:
    {
        "documents": [
            {"id": "string", "content": "string", "source": "string", "metadata": {...}},
            ...
        ]
    }
    
    Returns:
    {
        "ingested": int,
        "failed": int
    }
    """
    try:
        data = request.get_json()
        documents = data.get("documents", [])
        
        ingested, failed = rag_retriever.ingest_documents(documents)
        
        return jsonify({
            "ingested": ingested,
            "failed": failed
        }), 200
    except Exception as e:
        logger.error(f"Document ingestion failed: {e}")
        return jsonify({"error": str(e)}), 500


@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors"""
    return jsonify({"error": "Endpoint not found"}), 404


@app.errorhandler(500)
def internal_error(error):
    """Handle 500 errors"""
    return jsonify({"error": "Internal server error"}), 500


if __name__ == '__main__':
    try:
        init_ai_components()
        logger.info(f"Starting AIRS AI Service on port {settings.flask_port}")
        app.run(
            host='0.0.0.0',
            port=settings.flask_port,
            debug=settings.flask_debug
        )
    except Exception as e:
        logger.error(f"Failed to start application: {e}")
        exit(1)
