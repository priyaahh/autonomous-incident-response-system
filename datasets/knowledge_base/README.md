# Knowledge Base Indexing Source Directory

This directory holds the static organizational knowledge sources that are parsed, chunked, embedded, and indexed by the RAG pipelines.

---

## 🗂️ Internal Directories

```text
datasets/knowledge_base/
├── runbooks/    # Service-specific troubleshooting runbooks (markdown format)
├── guides/      # Infrastructure operational sheets, architecture specs, topologies
└── reference/   # Compliance benchmarks (NIST, OWASP) & threat framework records (MITRE ATT&CK)
```

## 📖 Ingestion Requirements
* **Markdown Standard**: Files should maintain a clear heading structure (`#`, `##`, `###`) to allow semantic chunk separators.
* **Metadata Headers**: Files must contain a metadata YAML front-matter block specifying `service_name`, `tier`, `severity`, and `tags` to allow pre-filtering during RAG operations.
