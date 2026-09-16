# AGENTS.md

## Project overview

Static marketing site for FV Automotores (automotive dealership), built with Astro 6, Tailwind CSS v4 and TypeScript. Managed with pnpm.

## Requirements

- Node.js >= 22.12.0
- pnpm 11.x

## Commands

```sh
pnpm dev       # start the dev server (Astro)
pnpm build     # production build (main validation; no lint/test scripts configured)
pnpm preview   # preview the production build locally
pnpm astro     # run any astro CLI command
```

## Environment variables

`PUBLIC_CARTO_API_KEY` — API key for CARTO basemap tiles (dark_all style), sent as the `?key=` query parameter on the tile URL in `src/sections/Location.astro`.

- Keep it in the local `.env` file (gitignored) and as an environment variable in Netlify.
- Never commit the key. Since it is `PUBLIC_`, it gets inlined into the client bundle — it's a tile-access key by design; do not reuse it for anything sensitive.
- The key is domain-restricted to `fvautomotores.com.ar`. Localhost tiles may render as a grey (403) map unless `localhost` is added to the allowed referrers in the CARTO key settings. This is expected, not a bug.

## Project structure

```
src/
  pages/       # routes (index, 404)
  sections/    # page sections, camelCase names (Header, Hero, Footer, Location, ...)
  components/  # reusable components (Button, SectionHeader, Reviews, ...)
  consts/      # static data (faq.ts, testimonials.ts)
  layouts/     # Layout.astro
  styles/      # global.css
  assets/svg/  # SVG assets imported as components
```

## Conventions

- Use the `@/` alias, which maps to `src/`.
- Tailwind CSS v4 is configured through the `@tailwindcss/vite` plugin (no `tailwind.config` file; theme lives in `src/styles/global.css`).
- Import SVG assets from `src/assets/svg` and use them as components.
- No code comments unless explicitly asked.
- Commit messages in Spanish, conventional style: `feat:`, `fix:`, `chore:`.

## Design system

Theme and base styles live in `src/styles/global.css` (Tailwind v4 `@theme`). There is no `tailwind.config` file.

**Fonts**
- `font-primary`: "Microgramma D Extended Bold" — display/headings, `@font-face` weight 700, loaded from `/fonts/Microgramma D Extended Bold.otf`.
- `font-overpass`: "Overpass" — body text, variable font weight 400, from `/fonts/Overpass-VariableFont_wght.ttf`.
- Both are `font-display: swap`. `Layout.astro` preloads the primary font and `hero_background.webp`.

**Colors** (Token scales `fv*-50..950`)
- `fvantracita` — neutral grays, `#F6F6F6` → `#1A1A1A`.
- `fvazul` — blues, `#EDF7FF` → `#0E265D`; `fvazul-700` = `#0055FF`.
- `fvplata` — silver/slate grays, `#F4F7F9` → `#2D3139`.
- Semantic aliases: `primary` = `#1A1A1A`, `accent` = `#0055FF`.

**Base (`@layer base`)**
- `html`/`body`: flex column, full width, `min-height: 100%`, no margin, no overscroll.
- Viewport background is `fvantracita-950` on both `html` and `body`.
- Custom scrollbars (webkit + Firefox): track `fvantracita-950`, thumb `fvplata-300`, hover `fvplata-50`.

**Components (`@layer components`)**
- `.nav-underline`: 1px animated underline (`bg-fvplata-300`) that grows to 100% on `.group:hover` (0.3s ease).

**Keyframes**
- `expandWidth` (width 0 → 100%).

**Page structure** (`src/pages/index.astro`, `lang="es"`, single dark page): Header → Hero → Inventory (`#showroom`) → Brands → SellYourCar (`#tasacion`) → About (`#nosotros`) → Socials (`#redes`) → Location (`#ubicacion`) → FAQ → sr-only dealer-details aside → Footer.

## pnpm workspace

`pnpm-workspace.yaml` contains `allowBuilds` entries for `esbuild` and `sharp`, both set to `true`. These must stay boolean:

- Do not leave the placeholder `set this to true or false` — pnpm writes it when installs skip build scripts, and it breaks `pnpm dev` with `ERR_PNPM_IGNORED_BUILDS`.
- If the values are ever clobbered, restore them with `pnpm approve-builds` or by editing the file.

Note: `sharp` may try to compile from source when no prebuilt binary matches the platform; it does not abort the install.

## Deployment

Hosted on Netlify, connected to the GitHub repo; the `main` branch auto-deploys.

- Builds on Netlify need `PUBLIC_CARTO_API_KEY` set as an environment variable, otherwise the built tiles omit the `?key=` param and CARTO serves tiles with the "API key required" watermark.
- After changing environment variables, redeploy via *Deploys → Clear cache and deploy site*.
- To verify a build is valid: `curl https://fvautomotores.com.ar/` should contain `?key=cb1...` in the tile URL.