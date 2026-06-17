# Context Directory

Stores React context structures to manage global state objects across views.

## Proposed Contexts
1. **IncidentContext.jsx**: Coordinates active incidents lists, tracks status transitions, and maintains selection pointers.
2. **AgentContext.jsx**: Listens for WebSocket notifications detailing step-by-step executions of active agents.
3. **ThemeContext.jsx**: Controls light vs dark mode preferences (defaults to dark).
