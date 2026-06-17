# AIRS Agentic AI Service

This service executes the multi-agent reasoning graph using **LangGraph**, **langchain-google-genai**, and connects to ChromaDB and Elasticsearch indices to run Retrieval-Augmented Generation (RAG) incident analyses.

---

## 📂 Internal Directory Map

```text
ai-service/
├── app/
│   ├── agents/          # Agent definition classes (module files)
│   ├── chains/          # State schemas and graph compilation setup
│   ├── core/            # Configs, logger, client definitions
│   ├── rag/             # Ingestion pipelines and client connector tools
│   └── main.py          # FastAPI service endpoint entry (to be written)
├── tests/               # Test suites (unit and integrations)
├── requirements.txt     # Service dependency mappings
└── README.md            # You are here
```

---

## ⚙️ Development Setup

### 1. Prerequisites
* Python 3.11+
* Active virtual environment:
  ```bash
  python -m venv venv
  source venv/bin/activate  # On Windows: .\venv\Scripts\activate
  ```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Environment Variables
Create a local config file (e.g. `.env`) with the following definitions:

| Variable | Description | Example / Default |
| :--- | :--- | :--- |
| `GEMINI_API_KEY` | Core LLM reasoning token | `AIzaSy...` (Required) |
| `CHROMA_DB_HOST` | Chroma DB endpoint | `localhost` |
| `CHROMA_DB_PORT` | Chroma DB communication port | `8000` |
| `ELASTICSEARCH_HOST` | Elasticsearch endpoint | `http://localhost:9200` |
| `SERVICE_PORT` | Python service FastAPI port | `8080` |
| `LOG_LEVEL` | Execution tracking detail | `INFO` |
