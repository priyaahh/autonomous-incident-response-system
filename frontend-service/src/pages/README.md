# Pages Directory

Hosts the main view assemblies representing distinct navigation routes of the portal.

## Proposed Pages
1. **Dashboard.jsx**: Primary operations screen. Visualizes active systems metrics, high-level counts (Total incidents, MTTR gauge, alert categories charts), and alert feeds.
2. **IncidentDetails.jsx**: Deep dive page for a single incident ID. Displays log feeds, active agent flow progress, root cause results, RAG context files, and the report compiler.
3. **KnowledgeBase.jsx**: Directory view allowing SREs to upload, search, and manage runbooks and guidelines.
4. **Settings.jsx**: Configures API endpoints connection parameters, models selection (Gemini vs GPT), and API token variables.
