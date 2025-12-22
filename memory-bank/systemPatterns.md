# System Patterns

## Architecture
- **Type**: Static Web Site (HTML/CSS/JS).
- **Hosting**: GitHub Pages.
- **Data Source**: JSON objects in `projects_indiv.js` (EN) and `projects_indiv_de.js` (DE).
- **Rendering**: Client-side rendering via `index.html` and `cards_indiv.html`.

## Global Design Language

### Color Palette (The Studio)
- **Canvas**: Alabaster Paper (`#FAFAF9`) with subtle noise/grain (3% opacity).
- **Typography (Dark)**: Carbon Ink (`#171717`) for headlines.
- **Secondary**: Stone (`#78716C`) for metadata.

### Insight Colors (Psychological Profile)
- **Cool Blue (The Analyst)** (`#0EA5E9`): Accuracy, Methodology.
- **Fiery Red (The Director)** (`#DC2626`): Speed, ROI.
- **Sunshine Yellow (The Visionary)** (`#D97706`): Innovation, Vibe.
- **Earth Green (The Companion)** (`#15803D`): Safety, Ethics.

### Typography
- **Display**: Playfair Display (Serif) - Represents "Human".
- **Interface**: Plus Jakarta Sans & JetBrains Mono - Represents "Structure/Machine".

## Key Components

### The Insight Card
- **Layout**: Floating cards with soft diffusion shadow.
- **Generative Covers**: Abstract CSS covers based on category (No Photos).
- **Interaction**: "Floating Marker" system with 4 insight corners (Border 40px, Padding 4).
- **Feedback**: "Respect" button with global counter (CounterAPI).

## Data Architecture (JSON Schema)

The specific schema for project cards in `projects_indiv.js`:

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
