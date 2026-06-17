# AIRS React Frontend Dashboard

This service provides a premium web portal for operational engineers, visualizing active log streams, executing agent reasoning state steps (visualized dynamically), listing historical post-mortems, and showcasing generated incident reports.

---

## 🎨 Design System & Visual Guidelines

To achieve a premium, state-of-the-art enterprise aesthetic, the UI must follow these rules:
1. **Glassmorphism Theme**: Use semi-transparent dark container card layouts with thin borders (`backdrop-blur`, border transparency) and ambient neon box shadows.
2. **Color Palette**: Avoid simple primary red, green, and blue. Instead use HSL tailwind colors:
   * **Background**: Rich dark slate/grey (e.g. `#0F172A`)
   * **Success / Normal**: Warm emerald (e.g. `#10B981`)
   * **Error / Critical Alerts**: Vivid rose (e.g. `#F43F5E`)
   * **Agent Active States**: Electric indigo/cyan (e.g. `#6366F1`)
3. **Animations**: Subtle, smooth micro-interactions. Active graph nodes should pulse, logs should stream smoothly, and cards should hover with a translation transform.
4. **Typography**: Utilize modern geometric typefaces (e.g., `Outfit` or `Inter`) loaded via Google Fonts.

---

## 📂 Folders & Architecture

```text
src/
├── assets/          # Logo SVG files, sound alerts, layout images
├── components/      # Modular UI buttons, charts, loading spinners, agent nodes
├── context/         # React Context stores (AuthContext, IncidentTrackerContext)
├── hooks/           # Custom react hooks (useIncidentList, useAgentWebSocket)
├── pages/           # View panels (Dashboard, IncidentDetail, KnowledgeBase, Settings)
├── services/        # Client connectors querying Spring Boot REST routes
└── App.jsx          # Route switcher and main container wrapper
```

---

## ⚙️ Development Startup

### 1. Prerequisites
* Node.js v20+
* NPM or Yarn

### 2. Startup Script
* **Install Packages**:
  ```bash
  npm install
  ```
* **Run Local Server**:
  ```bash
  npm run dev
  ```
* **Build Bundle**:
  ```bash
  npm run build
  ```
