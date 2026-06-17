# RUNBOOK: [Runbook Identifier / Title]

---
metadata:
  id: "RB-XXX"
  service_name: "[Target Microservice / Component Name]"
  tier: "[db | api | cache | frontend | infrastructure]"
  severity_level: "[CRITICAL | HIGH | MEDIUM | LOW]"
  author: "[Team / Email]"
  last_updated: "YYYY-MM-DD"
  tags: [error-code-1, system-component, database]
---

## 📋 Overview
`[Provide a high-level summary of what this service/system component does and what alert triggers lead to this runbook.]`

## 🚨 Triggering Alerts
The following monitoring alerts directly map to this runbook:
* `[AlertNameFromPrometheus]`
* `[CloudWatchAlertMetric]`

## 🔬 Diagnostic Checklist
Step-by-step instructions for the engineer (or Log Analysis Agent) to confirm the failure mode:

1. **Verify Logs**:
   * Inspect logs for keyword pattern: `[regex/pattern]`
   * Target Log File: `/var/log/services/example.log`
2. **Check System Resource Metrics**:
   * CPU utilization > 90%?
   * Connection pool status?
3. **Check Downstream Services**:
   * Command to query health endpoint: `curl http://[service]/health`

## 🛠️ Remediation Workflow

### Step 1: Immediate Mitigation
`[Instructions on how to stop the immediate bleeding - e.g. scale up replicas, restart task, block IP addresses, rollback deployment]`

```bash
# Example commands
kubectl rollout restart deployment/[deployment-name] -n default
```

### Step 2: Intermediate Recovery
`[Actions to stabilize the system, clean caches, database indexes rebuild]`

### Step 3: Root Cause Verification
`[What validation commands or metrics prove that the system is fully healthy again?]`

## 📘 Troubleshooting Reference
* **Common Error String**: `[Error logs snippets]`
* **Likely Root Causes**:
  * Root Cause A: `[Details on why it happens and how to prevent it]`
  * Root Cause B: `[Details on why it happens and how to prevent it]`
* **Escalation Path**: Contact On-Call Group `[Slack Channel / PagerDuty Link]`
