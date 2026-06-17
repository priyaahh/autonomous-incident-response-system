# Services Directory

Exposes API client connectors mapping directly to the Spring Boot REST interface.

## Proposed Services
1. **apiClient.js**: Global axios/fetch instance set up with bearer authentication and JSON headers.
2. **incidentService.js**: Methods for querying, creating, and modifying incident records (`getIncidents()`, `getIncidentById()`, `reTriggerAI()`).
3. **logService.js**: Methods for fetching historical indices from Elasticsearch database.
4. **runbookService.js**: Handles vector database queries and uploads.
