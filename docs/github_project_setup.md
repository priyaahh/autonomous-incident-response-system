# AIRS Developer Workflows & GitHub Project Board Setup

This document outlines the governance and configuration guidelines for the Autonomous Incident Response System (AIRS) repository. All 3 team members must adhere to these standards to ensure project health and clean git history.

---

## 🌿 Branch Naming Convention

We use a modified version of **GitHub Flow** with feature branches targeting `main` (or a stable integration branch `dev`). Branch names must follow this structure:

```text
type/issue-number-short-description
```

### Prefix Categories:
* `feat/` - New feature implementation (e.g., `feat/12-log-analysis-agent`)
* `bug/` - Bug fixes (e.g., `bug/88-fix-chroma-connection-leak`)
* `docs/` - Documentation updates (e.g., `docs/2-update-adr-002`)
* `refactor/` - Code restructuring that doesn't change behavior (e.g., `refactor/45-spring-security-config`)
* `ci/` - Devops or build configurations (e.g., `ci/105-add-docker-compose-test-run`)

---

## 💬 Commit Message Convention

All commits must follow **Conventional Commits** formats to allow automatic versioning and changelog generation.

### Format
```text
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Rules & Examples
* **Commit Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`.
* **Scope**: Denotes the service/directory affected (`ai`, `backend`, `frontend`, `docker`, `docs`).
* **Example**:
  ```text
  feat(ai): integrate log parsing agent with SharedState schema

  - Implement parser logic inside log_analyst.py
  - Add units test placeholders in tests/test_log_analyst.py
  - Closes #12
  ```

---

## 🏷️ GitHub Issues Labels

Create these labels in your GitHub Repository settings to categorize tickets:

| Label Name | Color Code | Description |
| :--- | :--- | :--- |
| `domain:agentic-ai` | `#0E8A16` | AI Layer / LangGraph / Agent Logic tasks |
| `domain:rag` | `#FBCA04` | Database indexing / Chroma / ES tasks |
| `domain:backend` | `#1D76DB` | Spring Boot API / Postgres tasks |
| `domain:frontend` | `#9B30FF` | React / UI / CSS tasks |
| `type:feature` | `#A2EEEF` | Standard feature task |
| `type:bug` | `#D93F0B` | Standard bug ticket |
| `type:documentation`| `#0075CA` | ADRs, user guides, or project documentation |
| `priority:critical` | `#B60205` | Blocks progress, requires immediate attention |

---

## 🏁 Milestones & Sprints

The project is structured into **4 execution milestones (Sprints)** of 2 weeks each:

### Milestone 1: Foundation Setup & Dataset Sandbox (Weeks 1-2)
* **Goal**: Establish the base skeleton, connect Docker containers (Elasticsearch, Chroma, Postgres), and gather sandbox datasets for incident log simulation.

### Milestone 2: Core AI Engine & RAG Ingestion (Weeks 3-4)
* **Goal**: Implement LangGraph agents (Log Analyst, Root Cause, Retriever, Risk Assessor, Report Generator) and configure documents indexing pipelines.

### Milestone 3: Spring APIs & UI Visualization (Weeks 5-6)
* **Goal**: Build the Spring Boot orchestrator service, map endpoints, and construct the React dashboard visualization screens.

### Milestone 4: Integration, Hardening & Docker Delivery (Weeks 7-8)
* **Goal**: End-to-end integration, performance optimization of retrieval RRF scores, error recovery routing, and final Docker network hardening.
