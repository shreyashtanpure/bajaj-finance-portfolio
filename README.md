# Bajaj Finance – Unofficial Portfolio Concept
Static site (HTML/CSS/vanilla JS + GSAP & ScrollTrigger from cdnjs). **Not** an official or authorized Bajaj Finance website. No backend, no data collection, no loan application flow.

## Run locally
1. Install VS Code and the "Live Server" extension.
2. `File > Open Folder` → `bajaj-finance-portfolio`.
3. Right-click `index.html` → **Open with Live Server**. (Or: `python3 -m http.server 8000`, then open http://localhost:8000.)

## Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
# create an empty repo on github.com first, then:
git remote add origin https://github.com/<your-username>/bajaj-finance-portfolio.git
git push -u origin main
```

## Deploy on Vercel (free)
1. Sign in at vercel.com with GitHub.
2. **Add New → Project**, import the repository.
3. Framework Preset: **Other**. Leave build command and output directory empty (root is served). Click **Deploy**.
4. You get a free `your-project.vercel.app` URL.
5. **Auto-deploys:** every push to `main` redeploys production; other branches/PRs get preview URLs.

## Custom domain
Only a domain **you own** (bought from a registrar) can be used. In Vercel: Project → Settings → Domains → add it. Then at your registrar add the DNS record Vercel shows: an `A` record for the apex domain (`example.com`) or a `CNAME` for a subdomain (`www`). Vercel issues HTTPS automatically after DNS propagates. You cannot use `bajajfinserv.in` — it belongs to Bajaj.

## Verify product links
Product URLs live in the `PRODUCTS` array in `js/main.js`. Click every "Learn More" and correct any that redirect or 404 before sharing.

## IMPORTANT: Folder structure for GitHub/Vercel
Upload the CONTENTS of this extracted folder, keeping folder paths intact.

```
index.html
README.md
.gitignore
css/style.css
css/animations.css
css/responsive.css
js/main.js
js/animations.js
js/calculator.js
assets/icons/concept-mark.svg
assets/images/README.txt
```

**Do not upload a ZIP file as your website, and do not flatten CSS/JS files into the repository root.**
The web page must find `css/style.css` and `js/main.js` relative to `index.html`.

### Update an EXISTING GitHub repository using Git (recommended for folder preservation)

1. Extract this ZIP to your Downloads folder. Open that extracted folder in VS Code.
2. Open Terminal in VS Code and run the following commands. If you already have a Git repository locally, do not run `git init` again.

```bash
git init
git add .
git commit -m "Fix Bajaj Finance website folder structure"
git branch -M main
git remote add origin https://github.com/shreyashtanpure/bajaj-finance-portfolio.git
git fetch origin
git pull origin main --allow-unrelated-histories --no-rebase
git push -u origin main
```

If Git reports merge conflicts or says the remote `origin` exists, stop and resolve that error first; don't force push unless you intend to overwrite history. If you have an existing local clone, simply copy the extracted files into that clone, remove the misplaced root-level CSS/JS files, then `git add -A`, `git commit -m "Fix paths"`, `git push`.

### Easier GUI method with GitHub Desktop (no drag/drop into the browser)

1. Install GitHub Desktop and sign in. Choose **File → Clone repository** and select `bajaj-finance-portfolio`.
2. Copy the CONTENTS of this extracted ZIP folder into the cloned repository folder; replace `index.html` when prompted.
3. Delete the six incorrectly located CSS and JS files from the repository ROOT (`style.css`, `animations.css`, `responsive.css`, `main.js`, `animations.js`, `calculator.js`). Do not delete their equivalents under `css/` and `js/`.
4. In GitHub Desktop, enter commit summary `Fix CSS and JS folders`, click **Commit to main**, then **Push origin**.
5. Vercel connected to GitHub automatically redeploys. If styles are cached, hard refresh (Ctrl+Shift+R).
