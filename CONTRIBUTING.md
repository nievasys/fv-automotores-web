# Contribuyendo a FV Automotores

## Proyecto

Sitio estático con Astro 6 + Tailwind CSS v4 + TypeScript.

## Comandos

- `pnpm dev` — dev server con recarga
- `pnpm astro dev --background` — dev en segundo plano
- `pnpm build` — build estático a `dist/`
- `pnpm preview` — previsualizar build
- `pnpm astro` — CLI de Astro

## Estructura

- `src/pages/` — rutas (`index.astro`, `404.astro`)
- `src/sections/` — secciones de página (Header, Hero, Footer, Location, ...)
- `src/components/` — componentes reutilizables
- `src/consts/` — datos estáticos (faq, testimonios)
- `src/layouts/` — layouts compartidos
- `src/styles/` — estilos globales (`global.css`)
- `src/assets/svg/` — SVGs importados como componentes
- Imports con alias `@/*` → `./src/*`

## Flujo de trabajo git

- Trabajar en `main` con commits atómicos
- Un commit = un cambio lógico
- Push frecuente a `origin` (`main`)

## Mensajes de commit (Conventional Commits, en español)

- `feat:` nueva funcionalidad — ej: `feat: añadido nuevo favicon`
- `fix:` corrección de bug — ej: `fix: corrijo margen del hero`
- `chore:` tareas de mantenimiento — ej: `chore: actualizo dependencias`
- `style:` cambios visuales sin lógica
- `docs:` documentación
- `refactor:` reestructuración sin cambiar comportamiento

## Antes de commitear

- Verificar que `pnpm build` no rompa
- Revisar `git status` / `git diff`
- No subir secretos ni `.env` (la API key de CARTO vive solo en `.env` y en las env vars de Netlify)