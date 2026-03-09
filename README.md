# M2 Website

Static marketing site for **M2 Pressure Pulse**, ready for GitHub Pages.

## Local preview

Open `index.html` directly in a browser, or run any static file server from this folder.

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Ensure your default branch is `main`.
3. In GitHub: `Settings -> Pages -> Build and deployment`.
4. Set `Source` to `GitHub Actions`.
5. Push changes to `main` (or run the workflow manually).

The workflow file is at `.github/workflows/deploy-pages.yml` and deploys the site root (`.`).
