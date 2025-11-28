# Academic Personal Website

Astro 5 + Tailwind 4 static site for showcasing research areas, publications, biography, contact information, and news for a Computer Science PhD student. Content lives in Markdown/JSON (Astro Content Collections) and is editable through Decap (Netlify) CMS at `/admin`.

## Stack

- Astro 5.x with static output (GitHub Pages compatible)
- Tailwind CSS v4 utility layer + custom tokens (`src/styles/global.css`)
- Content collections for `research`, `publications`, `updates`, `bio`, and `settings`
- Decap CMS (`public/admin/config.yml`) committing directly to GitHub
- RSS feed (`/rss.xml`), sitemap, and SEO metadata baked into `BaseLayout`

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:4321. Content updates are hot-reloaded.

## Editing Content

| Section        | Source                                                        | Notes |
| -------------- | ------------------------------------------------------------- | ----- |
| Research areas | `src/content/research/*.md`                                   | Cards with keywords, figure URL, and related pubs |
| Publications   | `src/content/publications/*.md`                               | Supports awards, badges, and artifact links |
| Biography      | `src/content/bio/*.md`                                        | Timeline entries (`end: present` for ongoing roles) |
| Updates        | `src/content/updates/*.md`                                    | Powers `/updates` page + RSS feed |
| Site settings  | `src/content/settings/site.json`                              | Hero text, contact info, social links |
| CMS config     | `public/admin/config.yml`                                     | Update `backend.repo` with your GitHub repo |

To use the admin UI, configure GitHub authentication (or Netlify Identity) and visit `/admin`.

## Deployment

1. Set `site` in `astro.config.mjs` to your canonical URL (e.g., `https://username.github.io`).
2. Configure GitHub Pages workflow (see `.github/workflows/deploy.yml`).
3. Optional: set `PUBLIC_WEB3FORMS_ACCESS_KEY` for the contact form endpoint.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start local development |
| `npm run build` | Production build in `dist/` |
| `npm run preview` | Preview the built site |
| `npm run astro check` | Typecheck and lint content |

## Maintenance Checklist

- Update Markdown entries via CMS or direct edits
- Replace placeholder media under `public/`
- Keep dependencies patched with `npm outdated`
- Run `npm run build && npm run preview` before deploy to catch issues
