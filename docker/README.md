# AIRS Infrastructure Container Services

This directory manages the docker orchestration settings for local development. Running this compose setup spins up the underlying storage indices, relational databases, and agent pipelines required by the full system stack.

---

## 🏗️ Docker Container Matrix

| Container Name | Service | External Port | Data Volume Location |
| :--- | :--- | :--- | :--- |
| `airs-postgres` | PostgreSQL (Relational metadata) | `5432` | `docker/postgres_data/` |
| `airs-elasticsearch` | Elasticsearch (Lexical search) | `9200` | `docker/elasticsearch_data/` |
| `airs-chromadb` | ChromaDB (Vector database) | `8000` | `docker/chroma_data/` |

---

## 🚀 Orchestration Commands

To launch all backend database infrastructure services in the background:
```bash
docker compose -f dev.docker-compose.yml up -d
```

To view running containers logs:
```bash
docker compose -f dev.docker-compose.yml logs -f
```

To stop and remove containers (preserving data volume data):
```bash
docker compose -f dev.docker-compose.yml down
```

To reset the database volumes (wipes database indexes and tables):
```bash
docker compose -f dev.docker-compose.yml down -v
```
