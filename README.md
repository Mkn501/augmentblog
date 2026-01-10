# AugmentBlog (Personal Innovation Portfolio)

> A personal portfolio and thought-leadership platform exploring the interaction between "Human Intent" and "Machine Velocity".

**Live URL:** [https://mknguyen.space](https://mknguyen.space)

## 📌 Project Overview
**AugmentBlog** (formerly The Symbiosis) serves as a modern innovation studio. It is a client-side, data-driven static site that uses generative design principles ("Paper" & "Ink" aesthetic) to showcase projects.

### Core Philosophy
*   **Minimalist Aesthetic:** Editorial design using Alabaster `#FAFAF9` and Carbon `#171717`.
*   **Dynamic Content:** Projects are defined in JSON (`projects_indiv.js`) and rendered via JavaScript.
*   **Federated Workflow:** Managed via the "Vibe Coding Flow" using AI agents (Kilo, Jules).

## 🚀 Quick Start
This project is a static site with no heavy build process, but we use `npm` for testing and `python` (or similar) for local serving.

### 1. Installation
Install dependencies (primarily for Playwright tests):
```bash
npm install
```

### 2. Run Locally
The project now supports a dedicated local development server with live reload.

**Standard Command (Node.js):**
```bash
npm start
# Runs 'live-server .' and opens browser automatically
```

**Alternative (Python 3):**
```bash
python3 -m http.server 8000
```

### 3. Testing
Run the regression test suite (Playwright):
```bash
npx playwright test
```

## 🧠 Memory Bank (Documentation)
**For AI Agents & Developers:** This project uses a **Memory Bank** as the single source of truth for documentation and context. Please refer to `memory-bank/` for deep context.

*   [**Project Brief**](memory-bank/projectbrief.md): Identity, core requirements, and goals.
*   [**Active Context**](memory-bank/activeContext.md): What we are working on *right now*.
*   [**System Patterns**](memory-bank/systemPatterns.md): Architecture, design systems, and component rules.
*   [**Tech Context**](memory-bank/techContext.md): Tech stack, dependency versions, and testing standards.
*   [**Progress**](memory-bank/progress.md): Status of tasks and milestones.

## 📂 Key Files
*   `index.html`: Main English entry point.
*   `projects_indiv.js`: The JSON data source for all projects.
*   `docs/`: Archive and legacy specifications.

---
*Last Updated: 2026-01-10*
