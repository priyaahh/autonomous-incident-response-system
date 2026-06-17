# Architecture Decision Record (ADR)

## ADR-0002: Agent Interaction and Flow Sequence

* **Status**: Approved
* **Date**: 2026-06-17
* **Author**: Senior AI System Architect

---

## 📖 Context & Problem Statement

We must design an execution sequence that ensures all 6 agent roles function cohesively without getting trapped in infinite loops, losing context, or ignoring critical evidence. A standard sequential pipeline (A -> B -> C) fails if the RAG search retrieves runbooks that suggest looking for distinct logs, or if the Risk Assessment determines that more investigation is required.

---

## 🧭 Proposed Agent Workflow & State Machine

We implement a centralized, state-based agent workflow using **LangGraph**. The entire execution revolves around a shared system state (`AirsState`) that holds alerts context, parsed evidence, search queries, risk details, and compiled report parts.

### Mermaid Interaction Flow

```mermaid
sequenceDiagram
    autonumber
    participant BE as Spring Boot Backend
    participant P as Planner Agent
    participant LA as Log Analysis Agent
    participant RC as Root Cause Agent
    participant KR as Knowledge Retrieval Agent
    participant RA as Risk Assessment Agent
    participant RG as Report Gen Agent

    BE->>P: Trigger Incident (Alert Payload)
    activate P
    Note over P: Analyze alert type, severity, & targets
    P->>LA: Command: Parse logs & Extract evidence
    activate LA
    LA-->>P: Return anomalous entries, logs metadata
    deactivate LA

    P->>KR: Command: Retrieve Runbooks & History
    activate KR
    Note over KR: Search ChromaDB + Elasticsearch
    KR-->>P: Return playbooks, history matching context
    deactivate KR

    P->>RC: Command: Infer Root Cause
    activate RC
    Note over RC: Compare logs anomalies against RAG runbooks
    RC-->>P: Return causal diagnosis & explanation
    deactivate RC

    P->>RA: Command: Assess Severity & Impact
    activate RA
    Note over RA: Determine confidence scores & system risk
    RA-->>P: Return severity metric & impact summary
    deactivate RA

    P->>RG: Command: Compile Final Report
    activate RG
    Note over RG: Format findings into structured template
    RG-->>P: Return completed Markdown report
    deactivate RG

    P-->>BE: Return Incident Report & Structured Payload
    deactivate P
```

---

## 🔄 Shared State Architecture (`AirsState`)

The state schema passed between the agents will contain the following structural fields:

```python
class AirsState(TypedDict):
    incident_id: str                 # Unique UUID
    alert_details: dict              # Raw incoming alert payload
    log_anomalies: list[dict]        # Extracted indicators of compromise/errors
    runbooks_retrieved: list[dict]   # Referenced playbooks & guidelines
    historical_cases: list[dict]     # Historical cases matching this alert
    root_cause_diagnosis: str        # Formulated root cause analysis
    severity_assessment: dict        # Risk level, blast radius, confidence scores
    incident_report_md: str          # Final assembled Markdown report
    execution_errors: list[str]      # Stack trace logs or error records
    active_agent: str                # Current agent handling state
```

---

## 🛠️ Routing & Decision Decisions

1. **Centralized Router**: The **Planner Agent** acts as the dispatcher. Rather than agents calling each other directly, they always return to the graph controller, allowing the Planner Agent to evaluate conditional paths (e.g. if the Knowledge Retrieval Agent returns 0 results, the Planner may redirect to general troubleshooting procedures instead of specific runbooks).
2. **Deterministic specialist transitions**: To ensure stability and predictable latency, the standard execution follows a structured pipeline:
   `Alert -> Planner -> Log Analyst -> Knowledge Retriever -> Root Cause -> Risk Assessor -> Report Gen -> Exit`.
3. **Execution Safety Boundaries**: The graph will support a max loop limit of 10 nodes to prevent LLM execution cascades if agents fail to satisfy target schemas.
