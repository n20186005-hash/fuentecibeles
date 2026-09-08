# Fuente de Cibeles — sitio Astro

Micrositio turístico en español para la Fuente de Cibeles, Roma Norte, Ciudad de México.

## Stack fijado

- Astro 7.3.1
- `@astrojs/cloudflare` 14.3.0
- Tailwind CSS / `@tailwindcss/vite` 4.3.3
- TypeScript 6.0.3 (Astro Check todavía no soporta TS 7)
- `@astrojs/check` 0.9.10
- `@astrojs/sitemap` 3.7.4
- Wrangler 4.129.0
- pnpm 12.3.4
- Node.js 24.20.0 LTS

## Dominio

El dominio se configura **sólo** en `astro.config.mjs`, variable `SITE`.

```js
const SITE = '';
```

- Vacío: el proyecto debe construir sin canonical absoluto y sin sitemap.
- Con dominio, por ejemplo `https://dominio.mx`: canonical, Open Graph, JSON-LD y sitemap derivan de `Astro.site`.
- No uses dominios de ejemplo.

## Desarrollo

```bash
corepack enable
corepack prepare pnpm@12.3.4 --activate
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Cloudflare Workers

La configuración usa el entrypoint unificado actual de `@astrojs/cloudflare`.

```bash
pnpm deploy
```

## Imágenes

Las fotografías son reales y proceden de Wikimedia Commons con licencia CC BY-SA 4.0. La atribución aparece junto a cada imagen y en `SOURCES.md`.

Si el entorno tiene acceso a Internet, `pnpm media:fetch` guarda las cuatro imágenes en `public/images/` con nombres estables para poder sustituir los `src` remotos por rutas locales.

## GA4

ID configurado: `G-HXM22WWPKP`.
