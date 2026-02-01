Redirect note
=============

This repository previously hosted the portfolio at the GitHub Pages site (Alfred-ZinMinKhant.github.io).

Current behavior
----------------
- The repository's `index.html` was replaced with a small client-side redirect that forwards visitors to:
  https://alfred-zinminkhant.netlify.app/
- A backup of the original application entry was saved as `index.app.html` in the repository root.

Why this is safe
-----------------
- The redirect is client-side (meta refresh + `window.location.replace`) — it does not modify DNS or GitHub Pages settings.

How to revert
-------------
1. Restore the original app entry by renaming or copying `index.app.html` back to `index.html`:

   mv index.app.html index.html

2. Commit and push the change. GitHub Pages will then serve the app again from this repo.

Notes
-----
- If you prefer a server-side (HTTP 301) redirect you can configure that at your domain provider or via Netlify by setting up redirects there.
- If you want me to add a small note to the repo `README.md` (this file) or update the Netlify settings, tell me which action to take next.
