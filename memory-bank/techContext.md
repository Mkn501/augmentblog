# Tech Context

## Stack
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+).
- **Styling**: Tailwind CSS (CDN).
- **Persistence**: `counterapi.dev` (Global Likes).
- **Hosting**: GitHub Pages (Free Tier).

## Key Files
- `index.html`: Home (EN). Root entry.
- `index_de.html`: Home (DE).
- `cards_indiv.html`: Detail (EN). Renders specific project.
- `cards_indiv_de.html`: Detail (DE).
- `projects_indiv.js`: Data (EN). Single source of truth.
- `projects_indiv_de.js`: Data (DE).

## Deployment & DNS
- **Source**: `main` branch.
- **Enforce HTTPS**: Enabled.
- **Domain**: `mknguyen.space` (Namecheap A/CNAME records).
- **CNAME**: Target `mkn501.github.io`.

## Automation Flow (Adding New Projects)
1. **Edit**: Owner manually edits `projects_indiv.js` in VS Code.
2. **Publish**: 
   - *Local*: Refresh to see changes immediately.
   - *Hosted*: Commit and Push `projects_indiv.js` to GitHub.
3. **Render**: `index.html` and `cards_indiv.html` access `window.PROJECTS` to generate view.

## Telemetry
- **API**: `https://api.counterapi.dev/v1/{namespace}/{key}/`
- **Namespace**: `mkn501-symbiosis`
- **Key**: `project-{id}`

## Known Constraints / Lessons
- **CORS**: `counterapi.dev` blocks `file://` requests; test on local server or live.
- **DNS/Cache**: Updates can take 15-60 mins; Browsers cache JS aggressively.
- **Link Previews**: Open Graph tags are essential for social sharing.
