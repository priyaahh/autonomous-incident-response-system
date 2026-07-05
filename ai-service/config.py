"""
Configuration module for AIRS AI Service
Handles environment variables and application settings
"""

from pydantic_settings import BaseSettings
from typing import Optional


class Settings(BaseSettings):
    """Application settings loaded from environment variables"""
    
    # API Configuration
    flask_env: str = "development"
    flask_debug: bool = True
    flask_port: int = 5000
    
    # LLM Configuration
    google_api_key: str
    llm_model: str = "gemini-pro"
    llm_temperature: float = 0.3
    
    # Vector Store (ChromaDB)
    chromadb_host: str = "localhost"
    chromadb_port: int = 8000
    chromadb_persist_dir: str = "./data/chromadb"
    
    # Elasticsearch
    elasticsearch_host: str = "localhost"
    elasticsearch_port: int = 9200
    elasticsearch_index_prefix: str = "airs"
    
    # Backend Service
    backend_service_url: str = "http://localhost:8080"
    backend_api_key: Optional[str] = None
    
    # Redis (Optional)
    redis_host: str = "localhost"
    redis_port: int = 6379
    redis_db: int = 0
    
    # Logging
    log_level: str = "INFO"
    log_file: str = "./logs/airs.log"
    
    # RAG Configuration
    rag_chunk_size: int = 1000
    rag_chunk_overlap: int = 200
    rag_top_k: int = 5
    
    # Agent Configuration
    agent_timeout: int = 300
    agent_retries: int = 3
    
    class Config:
        env_file = ".env"
        case_sensitive = False


# Initialize settings
settings = Settings()
