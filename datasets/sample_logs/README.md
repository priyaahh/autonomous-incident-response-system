# Sample Logs Directory

This directory contains representative raw logs (application logs, database traces, audit events) used to train and run regression tests against the **Log Analysis Agent** parser.

---

## 🗂️ Sample Format Template: `application_logs.json`

```json
[
  {
    "timestamp": "2026-06-17T12:00:01.001Z",
    "service": "api-gateway",
    "level": "INFO",
    "trace_id": "tr-77489a",
    "message": "Inbound request POST /api/v1/payments from 192.168.1.50"
  },
  {
    "timestamp": "2026-06-17T12:00:02.152Z",
    "service": "payment-service",
    "level": "ERROR",
    "trace_id": "tr-77489a",
    "message": "HikariPool-1 - Connection is not available, request timed out after 30000ms."
  },
  {
    "timestamp": "2026-06-17T12:00:02.180Z",
    "service": "payment-service",
    "level": "WARN",
    "trace_id": "tr-77489a",
    "message": "Retrying database connection (attempt 1/3)"
  }
]
```
