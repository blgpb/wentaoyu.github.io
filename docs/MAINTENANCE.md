# Maintenance Handbook

This guide explains how to keep the academic site healthy after launch.

## 1. Content Updates

1. **Via CMS**
   - Configure GitHub authentication (or Netlify Identity) for Decap CMS.
   - Update `public/admin/config.yml` → `backend.repo` with your GitHub repo (e.g., `cs-phd/academic-site`).
   - Visit `/admin`, sign in, and edit collections: Research Areas, Publications, Updates, Biography, Site Settings.
2. **Via Git**
   - Edit Markdown/JSON content directly under `src/content/**`.
   - Run `npm run astro check` to validate schema.

## 2. Assets

- Upload figures/diagrams to `public/uploads/` and reference them via `/uploads/<file>`.
- Optimize images (<300 KB) and provide descriptive `alt` text to maintain accessibility.

## 3. Contact Form

- Set `PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env` to enable submissions.
- Replace `formEndpoint` in `src/pages/contact.astro` if you use a different form provider.
- Honeypot field is active by default; add reCAPTCHA/Turnstile by wrapping the form with your provider script if needed.

## 4. Deployment Checklist

1. Update `site` in `astro.config.mjs` with your production domain.
2. Commit changes to `main`; GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages.
3. Monitor workflow logs for build errors.
4. Run `npm run build && npm run preview` locally before tagging releases.

## 5. Extensibility Hooks

- `src/lib/site.ts`: add helper methods for Scholar/Semantic Scholar ingestion.
- `src/pages/publications.astro`: the inline filter can be upgraded to a dedicated island if you adopt React/Svelte components.
- `src/pages/index.astro`: highlight section consumes the latest publication/update—adjust selection logic if you add metadata (e.g., `featured: true`).

## 6. Accessibility & QA

- Use Lighthouse or `npm run astro check` before merges.
- Verify color contrast when modifying `src/styles/global.css` tokens.
- Keyboard test the navigation and contact form whenever layout changes occur.

## 7. Backups

- Because content is stored in Git, ensure branch protection and regular pushes to GitHub.
- Export CMS entries periodically if using an alternate backend.
