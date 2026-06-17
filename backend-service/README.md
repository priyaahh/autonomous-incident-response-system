# AIRS Backend Service (Spring Boot)

This microservice acts as the core gateway, handling incident alert ingestion, user authentication, security, dashboard aggregation queries, database management, and delegation to the LangGraph AI Service.

---

## 📂 Package Architecture

The code conforms to standard DDD (Domain-Driven Design) structures under the base package `com.autosoc.airs`:

```text
src/main/java/com/autosoc/airs/
├── config/       # Spring Security, CORS, Async executors, Client configurations
├── controller/   # REST Controllers (IncidentController, DashboardController)
├── model/        # Entities (Incident, AuditLog) & DTOs (AlertRequest, ReportResponse)
├── repository/   # Spring Data JPA Repository interfaces
└── service/      # Business logic, AI Service Client wrapper (HTTP/gRPC)
```

---

## ⚙️ Development Guide

### Prerequisites
* Java JDK 21 (LTS)
* Maven 3.9+
* Running PostgreSQL instance (configured via environment variables or Docker Compose)

### Common Commands

* **Compile and Build**:
  ```bash
  mvn clean compile
  ```
* **Run Tests**:
  ```bash
  mvn test
  ```
* **Run Locally**:
  ```bash
  mvn spring-boot:run
  ```

---

## 🔌 API Boundaries (Planned)

| HTTP Verb | Path | Role |
| :--- | :--- | :--- |
| **POST** | `/api/v1/alerts` | Ingests incoming alerts from monitoring tools (Prometheus, CloudWatch) |
| **GET** | `/api/v1/incidents` | Lists active and resolved incidents |
| **GET** | `/api/v1/incidents/{id}` | Fetches incident summaries, metrics, and generated reports |
| **POST** | `/api/v1/incidents/{id}/re-evaluate` | Manually triggers the AI engine to re-run investigation |
| **GET** | `/api/v1/dashboard/metrics` | Computes aggregation metrics (MTTR, incident spikes, agent task latency) |
