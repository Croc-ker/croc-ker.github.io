# Croc-ker portfolio

A personal portfolio starter built with Next.js, React, and TypeScript. The
site is exported as static files and deployed to GitHub Pages at
`https://croc-ker.github.io`.

## Run locally

Use Node.js 20 or newer:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview the site.

## Make it yours

- Update the intro, about section, project cards, skills, and links in
  `app/page.tsx`.
- Change the page title and social sharing metadata in `app/layout.tsx`.
- Adjust colors, typography, and responsive styles in `app/globals.css`.
- Replace the example project links and `hello@croc-ker.dev` email address.

## Deploy to GitHub Pages

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and
deploys the site when changes are pushed to `main`. In the repository settings,
open **Pages** and set the build and deployment source to **GitHub Actions**.

The Next.js configuration uses `output: "export"` and creates the deployable
static site in `out/`. No server-side features are used, so the exported files
can be hosted directly on GitHub Pages.

To verify a production build locally:

```bash
npm run build
```
