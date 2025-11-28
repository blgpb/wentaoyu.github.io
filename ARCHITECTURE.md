# Academic Site Technical Plan

## Stack Overview
- **Framework**: [Astro 4.x](https://astro.build) with the App Router for static-first builds, optimized for GitHub Pages via `astro build && astro check` and `astro deploy`.
- **Language & Tooling**: TypeScript for type safety, SCSS modules plus a minimal utility layer (Tailwind via `@astrojs/tailwind` for responsive spacing/typography helpers), and Iconify for vector icons.
- **Content Storage**: Astro Content Collections (`src/content`) with schema-validated Markdown + frontmatter for Research Areas, Publications, Biography timeline entries, and Updates.
- **CMS**: Decap (Netlify CMS) deployed under `/admin`. It commits directly to `main` via GitHub auth, giving a lightweight editor UI without server infrastructure.
- **Styling System**: Design tokens defined in `src/styles/tokens.css` (colors, typography scale, spacing). Components use CSS variables so dark/light modes toggle cleanly.
- **Deployment**: GitHub Pages via Actions workflow (`.github/workflows/deploy.yml`) that installs deps, runs lint/typecheck/tests, builds static site, and publishes to `gh-pages` branch.
- **Analytics & Feature Flags**: Optional Plausible analytics snippet gated by `PUBLIC_ENABLE_ANALYTICS` env var. Future-ready hooks for Scholar/Semantic Scholar API clients.

## Information Architecture → Files
| Requirement | Implementation |
| --- | --- |
| Home | `src/pages/index.astro` composed from hero + highlight cards + CTA shortcuts |
| Research Areas | `src/pages/research.astro` pulling from `src/content/research/*.md` |
| Publications | `src/pages/publications.astro` using content collection with filters and search powered by `Fuse.js` client-side |
| Biography | `src/pages/biography.astro` rendering timeline data from `src/content/bio/*.md` |
| Contact | `src/pages/contact.astro` with static form posting to Web3Forms + honeypot + optional Turnstile widget |
| Updates | `src/pages/updates.astro` + RSS feed via `src/pages/rss.xml.ts` |
| Global Layout | `src/layouts/BaseLayout.astro` controlling nav/footer + theme toggle |

## CMS Collections
```
admin/
  config.yml   # Decap configuration
src/content/
  research/*.md  # title, summary, keywords, media references
  publications/*.md  # metadata, asset links, badges
  bio/*.md  # timeline entries
  updates/*.md  # news items
  settings/site.json  # hero text, social links
```

## Accessibility & Performance Checklist
1. Semantic landmarks (`header`, `nav`, `main`, `footer`), descriptive link text.
2. `prefers-reduced-motion` respect, focus-visible styles, skip-to-content link.
3. Image optimization through Astro `<Image />` + `alt` text fields in content schema.
4. Lazy-loaded diagrams/videos, initial payload budget tracked via `pnpm astro check --watch` and Lighthouse script.

## Future Hooks
- Scholar API integration stub under `src/lib/scholar.ts` returning mock data until API keys provided.
- Embeddable visualization block component to drop interactive demos sourced from `/public/media`.
- Newsletter component scaffolding tied to Buttondown/ConvertKit API modules.
