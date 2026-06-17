# Hooks Directory

Contains custom React hook controllers to isolate business and fetch lifecycle logic from the presentation nodes.

## Proposed Hooks
1. **useIncidents.js**: Handles retrieval of incident datasets from the Spring Boot API, including pagination parameters.
2. **useActiveAgent.js**: Integrates client WebSocket connections to trigger UI state changes during agent executions.
3. **useLogStream.js**: Subscribes to backend log queues to support log scrolling features.
