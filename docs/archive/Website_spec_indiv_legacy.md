# Master Design Specification: AugmentBlog (Personal Innovation Portfolio)

> [!NOTE]
> **MAINTENANCE GUIDE: WHAT GOES HERE?**
> This file is the **System Constitution**, not a To-Do list.
> 
> *   **✅ DO MAINTAIN (The "Laws"):**
>     *   **Design System:** Colors, Fonts, Component rules (e.g., "All cards must have 4 insight corners").
>     *   **Architecture:** JSON Schemas, Data logic, File structures.
>     *   **Infrastructure:** DNS records, Hosting config, Deployment rules.
>     *   *Example:* "We changed the Brand Color to Purple" → **UPDATE THIS FILE.**
> 
> *   **❌ DO NOT MAINTAIN (The "Status"):**
>     *   **Checklists:** Do not track `[x] Done` / `[ ] Pending` here.
>     *   **Task Management:** Use **Taskmaster** for all workflow and status tracking.
>     *   *Example:* "I finished the About Page" → **UPDATE TASKMASTER, NOT THIS FILE.**

**Project:** AugmentBlog (formerly The Symbiosis)
**Metaphor:** A sunlit, modern innovation studio. Clean lines, organic textures, "breathing room".
**Vibe:** Inviting, clarity-focused, professional, optimistic. High-end editorial feel.
**Status:** FINAL (Daylight Concept + Floating Corners)
**Live URL:** [https://mknguyen.space](https://mknguyen.space)
**Repository:** [https://github.com/Mkn501/augmentblog](https://github.com/Mkn501/augmentblog)

---

## 1. Project Overview

**AugmentBlog** is a personal portfolio and thought-leadership platform exploring the interaction between "Human Intent" and "Machine Velocity".

### Core Philosophy
- **Minimalist Aesthetic:** High-end, editorial design using "Paper" (Alabaster) and "Ink" (Carbon) color palette.
- **Dynamic Content:** Projects are data-driven (JSON) and rendered client-side.
- **Interactive:** Global "Like" counters via API, hover effects, and category-based filtering.

---

## 2. Global Design Language

### The Color Palette (The Studio)

*Precise values derived from HTML prototype.*

#### Canvas (Background)
- **Alabaster Paper:** `#FAFAF9`
- **Texture:** Must include a subtle SVG noise/grain texture (opacity 3%) to avoid looking sterile.

#### Typography (Dark)
- **Carbon Ink:** `#171717`
- **Usage:** Headlines, primary body text. High contrast but softer than pure black.

#### Secondary Text
- **Stone:** `#78716C`
- **Usage:** Meta-data, sub-lines, descriptors.

### The Insight Colors (The Psychological Profile)

*Based on the 'Insights Discovery' color energies.*

🔵 **Cool Blue (The Analyst):** `#0EA5E9` (Azure Ink)  
**JSON Key:** `analyst`
**Persona:** Precise, deliberate, questioning.  
**Message:** Accuracy, Methodology, Risk Mitigation. *("Show me the data.")*

🔴 **Fiery Red (The Director):** `#DC2626` (Crimson Ink)  
**JSON Key:** `businessman`
**Persona:** Competitive, demanding, determined.  
**Message:** Speed, ROI, efficiency, results. *("Get to the point.")*

🟡 **Sunshine Yellow (The Visionary):** `#D97706` (Amber Ink)  
**JSON Key:** `visionary`
**Persona:** Sociable, dynamic, persuasive.  
**Message:** Innovation, Creativity, "Vibe", Future-potential. *("Inspire me.")*

🟢 **Earth Green (The Companion):** `#15803D` (Sage Ink)  
**JSON Key:** `humanist`
**Persona:** Caring, encouraging, sharing.  
**Message:** Safety, Human-Impact, Scalability without fear, Ethics. *("Is it safe for my team?")*

### Typography (The Identity)

- **Display Font:** Playfair Display (Serif) [CDN]. Represents "Human" curator.
- **Interface Font:** Plus Jakarta Sans & JetBrains Mono [CDN]. Represents "Structure" and "Machine".

---

## 2. Page 1: The Main Gallery (Home)

### A. The "Foyer" (Hero Section)

- **Navigation:** None (Clean Header).
- **Action:** No public "Submit" button. Admin link hidden or removed from public view.
- **The Title:** Massive Serif typography ("AUGMENT")
- **The Manifesto:** Central column text explaining Human+AI philosophy
- **Language Switcher (NEW):** Top-right corner. Two pill-shaped buttons: "DE" and "ENG".
    - Active language: Solid Carbon Ink background (`#171717`), White text.
    - Alternative language: White background, Stone border, hoverable.

### B. The "Exhibition Hall" (The Project Grid)

- **Layout:** Masonry Grid with large gaps (gap-12)
- **Card Style:** Floating cards with soft diffusion shadow (shadow-paper)
- **Visual Strategy:** Generative Covers (No Photos)

> The system generates abstract CSS covers based on category:
> - **Finance:** Organic Radial Gradients (Flow/Liquid)
> - **Engineering:** Structured Grid Patterns (Logic/Structure)
> - **Code/Automation:** Giant Typography Symbols (e.g., { })

### C. The "Curator's Desk" (Footer)

- **Visual:** Asymmetric split with giant typography "READY TO BUILD?"
- **Links:** Monospace data list (LinkedIn, Email)

---

## 3. UI Component: The Insight Card

### Visual Layout

- **Background:** Pure White (`#FFFFFF`)
- **Aspect Ratio:** Vertical Rectangle (approx 4:5)
- **Content:** Generative Cover (Top), Title & Tech Stack (Bottom)
- **Badges:** Publication Date (Top-Center, Pill style)

### Author Attribution

- Located at bottom-center
- Small circular avatar (or initial) + by [Name] (Always "You" or specific persona)

### Social Proof (Feedback Loop)

- **"Respect" Button:** Heart icon (Red).
- **Counter:** Global count of total likes (fetched asynchronously).
- **Purpose:** Qualitative feedback on which projects resonate most.

### Interaction Design (The "Floating Marker" System)

#### The Corners
- Large, solid triangular markers (border-[40px]) floating inside card (via p-4 padding)
- **Why:** Increases click-target size and creates a layered, tactile feel

#### Hover Effect
- Card lifts, corner marker scales up
- Tooltip reveals specific persona message

#### Passive Animation ("The Firefly")
- **Behavior:** A single "spark" jumps from card to card across the grid.
- **Timing:** Every 3-5 seconds, a random corner on a random card pulses (glows intensity 100% -> 0%).
- **Goal:** Guide the eye and encourage hovering ("Catch the light").

---

## 4. Page 2: Project Detail View (The Overlay)

### A. The Header

- **Title:** Large Serif
- **Action:**  "Like/Respect" Button (in top-right or adjacent to title).
- **Language Switcher:** Top-right corner (above or adjacent to Like button).
    - Logic: On click, navigates to the equivalent page in the chosen language while **preserving the project ID** (e.g., `cards_indiv.html?id=X` -> `cards_indiv_de.html?id=X`).
- **The 4-Insight Grid:** Row displaying 4 core messages side-by-side
- **Stats:** Time, Tech Stack, AI Model

### B. The Methodology Flow (The Narrative)

- **The Prompt (Intent):** The original human query
- **The Pivot (Deep Dive):** Where human challenged AI
- **Implementation (Artifact):** Live App Embed
- **Refinement (Validation):** Context/Safety check
- **Tech Stack (Appendix):** List of tools used, distinguished by a thick dashed separator (`border-t-2`).

---

## 5. Private Administration (Internal Only)

**Purpose:** A private tool for the Portfolio Onwer to add new case studies without writing JSON manually.

- **Access:** Local file (`admin_indiv.html`). **Legacy/Internal Only.**
- **Function:** Form-based input for all project fields.
- **Output:** Generates a JSON object to be pasted into the data source.
- **Status:** **Deprecated.** Projects are now manually edited in `projects_indiv.js` for finer control.
- Title, Tech Stack, Time to Build, GitHub Link

### Part B: The Narrative
- **Intent:** What was the spark?
- **Pivot:** Where did you correct AI?
- **Validation:** What real-world context was missing?

### Part C: The 4 Insights
- 🔵 **Analyst:** Accuracy/Depth hook
- 🔴 **Director:** Speed/ROI hook
- 🟡 **Visionary:** Innovation/Tech hook
- 🟢 **Companion:** Safety/Ethics hook

---

## 6. Reference Content: Case Study #001

*Source data for "The Starnberg Investment".*

### Financial Logic (The Pivot)

- **Status Quo:** 469k Price, 900€ Rent = 2.11% Yield
- **The "Human" Correction:** Comparison vs. 10Y German Bond (2.8%)
- **Result:** Negative Leverage identified (-4% RoE)

### Content Hooks

🔵 **Analyst:** "Risk-adjusted comparison: Property (2.4%) vs. Bonds (2.8%)."  
🔴 **Director:** "Go/No-Go decision in <10 mins. Saved €500k."  
🟡 **Visionary:** "Vibe Coding: From conversation to deployed App in 1 hour."  
🟢 **Companion:** "Safety check: 1992 Heating System & WEG Reserves."

---

## 7. Technical Implementation

### A. Stack & File Structure

**Tech Stack:**
- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+).
- **Styling:** Tailwind CSS (via CDN).
- **Persistence:** `counterapi.dev` (Global Likes).
- **Hosting:** GitHub Pages (Free Tier).

**Key Files:**
| **`index.html`** | **Home (EN)**. Root entry. Fetches `projects_indiv.js`. |
| **`index_de.html`** | **Home (DE)**. German version of gallery. |
| **`cards_indiv.html`** | **Detail (EN)**. Renders specific project from `projects_indiv.js`. |
| **`cards_indiv_de.html`** | **Detail (DE)**. Renders specific project from `projects_indiv_de.js`. |
| **`projects_indiv.js`** | **Data (EN)**. Single source of truth for English content. |
| **`projects_indiv_de.js`** | **Data (DE)**. Single source of truth for German content. |
| **`CNAME`** | **DNS**. Custom domain config. |

### B. Routing & Navigation
- **Home to Detail:** Links in `index.html` pass the ID: `href="cards_indiv.html?id=fact-checking"`.
- **Detail Logic:** `cards_indiv.html` parses `window.location.search`, finds the matching project in the `projects` array, and renders it.
- **Language Routing:** The top-header switcher handles language transitions. For detail pages, JavaScript dynamically updates the link `href` to include the current `?id=` to prevent loss of context.

### C. Data Architecture (JSON Schema)

**Purpose:** Enable automated card creation via external JSON feeds.

**Core Principle:** The frontend must not hardcode cards. It must fetch and render based on a structured JSON schema.

### JSON Schema Definition (Card Object)

Defined in `projects_indiv.js`.

```json
{
  "id": "string (unique ID)",
  "category": "string (e.g. 'Real Estate Analysis')",
  "type": "string (e.g. 'Case Study')",
  "style_type": "enum('organic', 'structured', 'code')",
  "title": "string",
  "subtitle": "string",
  "tagline": "string",
  "author": "string",
  "publication_date": "string (DD.MM.YYYY)",
  "likes": "number",
  "tech_stack": ["string"],
  "metrics": {
    "role": "string",
    "timeline": "string",
    "impact": "string",
    "tech": "string"
  },
  "summary": "string",
  "insights": {
    "analyst": "string",
    "businessman": "string",
    "visionary": "string",
    "humanist": "string"
  },
  "steps": [
    {
      "title": "string",
      "color": "string (tailwind class)",
      "content_type": "enum('text', 'list', 'html', 'image', 'failure_success')",
      "text": "string?",
      "items": ["string"]?,
      "html": "string?",
      "image_url": "string?",
      "image_caption": "string?",
      "failure": "string?",
      "success": "string?"
    }
  ],
  "lessons": ["string"],
  "generalizes": "string (markdown allowed)"
}
```

### Automation Flow

1.  **Edit:** Owner manually edits `projects_indiv.js` in VS Code.
2.  **Publish:**
    -   *Local:* Refresh to see changes immediately.
    -   *Hosted:* **Commit and Push** `projects_indiv.js` to GitHub.
3.  **Render:** `index.html` and `cards_indiv.html` access `window.PROJECTS` to generate view.



---

## 8. Lightweight Telemetry (Hybrid Architecture)

**Context:** The site remains static (no backend for content), but we need persistence for "Likes" to serve as feedback.

**Solution: CounterAPI (Global Synchronization)**
We migrated from `localStorage` to **CounterAPI**.

-   **Namespace:** `mkn501-symbiosis`
-   **Key:** `project-{id}`
-   **Read:** `GET https://api.counterapi.dev/v1/{namespace}/{key}/`
-   **Increment:** `GET https://api.counterapi.dev/v1/{namespace}/{key}/up`
-   **Logic:**
    -   On load: Fetch current count.
    -   On click: Optimistically update UI (+1), then call API.

---



## 10. Deployment & DNS Configuration

### GitHub Pages
- **Source:** `main` branch.
- **Enforce HTTPS:** Enabled.

### DNS Settings (Namecheap)
To point `mknguyen.space` to GitHub:
1.  **A Records (@):** `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
2.  **CNAME Record (www):** Target `mkn501.github.io`
3.  **Clean Up:** Removed default redirects/parking to avoid conflicts.

---

## 11. Lessons Learned

### 🚩 CORS & API Limitations
- **Issue:** `counterapi.dev` blocked requests when running locally (`file://`) due to CORS.
- **Fix:** Testing APIs requiring network access is best done on a local server (`python -m http.server`) or the live deployment.

### 🚩 DNS Propagation & Caching
- **Issue:** GitHub showed "Improperly Configured" and `dig` returned Namecheap parking IPs long after changing settings.
- **Lesson:** DNS updates take **15-60 minutes**. Tools like `dig` are authoritative, but intermediate caches (ISPs) can lag.
- **Browser Caching:** Chrome persistently cached `projects_indiv.js`.
- **Fix:** Always test "missing" updates in **Incognito/Private** windows or perform a **Hard Refresh** (`Cmd+Shift+R`).

### 🚩 Link Previews (Open Graph)
- **Issue:** iMessage showed "The Symbiosis" instead of "AugmentBlog".
- **Fix:** Added `og:title`, `og:description`, and `og:image` meta tags.
- **Lesson:** Scrapers (Facebook/Apple/Slack) cache metadata for hours. The fix doesn't show instantly in chat apps even if the site title updates immediately.

### 🚩 Git Workflow
- **Conflict:** Remote (GitHub) had changes not in Local.
- **Fix:** `git pull --rebase origin main` to sync history before pushing.
