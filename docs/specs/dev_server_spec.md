# Feature Spec: Local Development Server

## Goal
Enable a robust local development environment that supports:
1.  **CORS**: Allow specific files (e.g., `projects.json`) to be fetched via JavaScript locally.
2.  **Live Reload**: Automatically refresh the browser when files change.

## Implementation Details

### Tech Stack
- **Engine**: Node.js
- **Package**: `live-server` (Dev Dependency)

### Steps
1.  **Initialize NPM**: `npm init -y` (if `package.json` does not exist).
2.  **Install**: `npm install --save-dev live-server`.
3.  **Scripts**: Add `"start": "live-server ."` to `package.json`.
4.  **Security**: Ensure `node_modules` is added to `.gitignore`.

## Verification
- **Command**: `npm start`.
- **Success Criteria**:
    - Browser opens automatically to `index.html`.
    - Console shows no CORS errors for `fetch('projects_indiv.js')` (or similar data sources).
    - Making a text change in `index.html` triggers a browser refresh.
