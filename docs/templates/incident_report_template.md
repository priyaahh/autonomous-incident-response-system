# INCIDENT INVESTIGATION REPORT: [INCIDENT-ID]

## 🚨 Executive Summary

* **Incident ID**: `[Generated UUID]`
* **Title/Summary**: `[Short descriptive title of the incident]`
* **Trigger Event**: `[Raw Alert Name / Source system name]`
* **Trigger Time**: `[YYYY-MM-DD HH:MM:SS UTC]`
* **Resolution Time**: `[YYYY-MM-DD HH:MM:SS UTC or Status: PENDING_INVESTIGATION]`
* **Severity Assessment**: `[CRITICAL | HIGH | MEDIUM | LOW]`
* **Confidence Score**: `[0.0 - 1.0]` (Assessed by Risk Agent)
* **Lead Investigator Agent**: `PlannerAgent v1.0.0`

---

## 🔍 Incident Details & Log Evidence

### Anomalous Patterns Extracted
`[Log Analysis Agent parses and outputs key log entries here with timestamps and source systems]`

```text
[TIMESTAMP] [SYSTEM] [LEVEL] [EVENT DETAILS]
Example: 2026-06-17 12:05:00.123 SERVICE-A ERROR Connection timeout reading database-2.cluster.local
```

### Affected Targets & Systems
* **Target Host(s)**: `[e.g. host-db-node-02, api-pod-204]`
* **Service Name**: `[e.g. user-auth-service, transactional-payment-api]`
* **External Integrations**: `[e.g. Stripe Gateway, SendGrid SMTP]`

---

## 💡 Root Cause Analysis (RCA)

* **Infered Failure Mode**: `[e.g. Memory Leak, DB Connection Pool Exhaustion, Network Split]`
* **Technical Explanation**:
  > `[Root Cause Agent reasoning description explaining how the system failed]`
* **Evidence Correlation**:
  `[Why the agent reached this conclusion, link back to log lines and metrics]`

---

## 📚 Reference Runbooks & Historical Matches

The **Knowledge Retrieval Agent** matched the following operational runbooks and historical post-mortems:

### Matched Runbooks
1. **[Runbook Title/Link]** (Confidence Match: `94%`)
   * **Guideline**: `[Key summary of troubleshooting action suggested in the runbook]`
2. **[Runbook Title/Link]** (Confidence Match: `81%`)
   * **Guideline**: `[Key summary of troubleshooting action suggested in the runbook]`

### Relevant Historical Incidents
* **Incident-2025-409**: "Database pool exhaustion during Black Friday load."
  * **Similarity**: `89%` overlap in error traces.
  * **Past Mitigation**: "Increased connection limit to 150 and implemented aggressive backoffs on client."

---

## ⚠️ Risk & Impact Assessment

* **Impact Scope**: `[e.g., Affecting 15% of downstream auth requests. Customer facing latency elevated by 1.2s.]`
* **Security Threat Vector**: `[e.g., None, or MITRE ATT&CK: T1499.004 Endpoint Denial of Service]`
* **Blast Radius Assessment**:
  `[Risk Assessment Agent notes on what downstream nodes could fail if left unmitigated]`

---

## 🛠️ Actionable Remediation Steps

### Immediate Actions (SRE Actions)
- [ ] `[Action Item 1: e.g., Restart the pods on kubernetes cluster-01]`
- [ ] `[Action Item 2: e.g., Toggle feature flag DB_CACHE_FALLBACK]`

### Long-Term Prevention (Developer Actions)
- [ ] `[Action Item 3: e.g., Refactor retry block in database client library]`
- [ ] `[Action Item 4: e.g., Set alerts threshold on Prometheus for connection counts]`
