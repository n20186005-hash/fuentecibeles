# Fuente de Cibeles — sitio Astro (fuentecibeles.com)

Micrositio turístico en español para la Fuente de Cibeles (Plaza Villa de Madrid), Roma Norte, Ciudad de México.

Sitio de una sola página con dominio configurado (`https://fuentecibeles.com`), diseñado como landing SEO de la entidad para vincular con su ficha de Google Maps.

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
const SITE = 'https://fuentecibeles.com';
```

- Con dominio: canonical, Open Graph, JSON-LD y sitemap derivan de `Astro.site`.
- Dejar vacío permite construir el proyecto sin dominio (sin canonical absoluto ni sitemap).

## SEO / entidad

- Nombre del sitio centralizado en `src/data/site.ts`: `SITE_NAME` = «Fuente de Cibeles Ciudad de México — Guía turística»
  (formato atractivo + ciudad + guía). Es la fuente única de `og:site_name` y de `withSiteName()` para páginas futuras.
- TDK orientado a intención: `<title>` con «Fuente de Cibeles CDMX: historia, cómo llegar y mapa» y metadescripción con
  historia de la réplica, ubicación exacta, Metro/Metrobús, fotos y alrededores.
- Secciones con ancla propia: `#inicio`, `#historia`, `#visita`, `#fotos` (galería de 4 fotos), `#como-llegar`
  (Metro Línea 1, Metrobús Durango, ECOBICI, Turibus + rutas paso a paso), mapa de ubicación, `#fuentes` y `#faq`.
- JSON-LD en `<head>`: `Organization`, `WebSite`, `WebPage`, `TouristAttraction` + `LandmarksOrHistoricalBuildings`
  (con `@id`, `image` como `ImageObject`, `address`, `geo`, `hasMap`, `sameAs` .gob.mx, `openingHoursSpecification`,
  rating 4.6 · 22,741 y `isAccessibleForFree` / `publicAccess`), `BreadcrumbList` y `FAQPage` (12 preguntas).
- FAQ escritas para consultas reales de Search Console: ubicación, dirección y Plus Code, Metro, Metrobús, réplica original
  de Madrid, qué ver cerca y fotografía.
- Breadcrumb visible (Inicio › Ciudad de México › CDMX › México › Fuente de Cibeles) y mapa de Google con el `src` de embed oficial.
- Enlaces de autoridad .gob.mx (portal de turismo del Gobierno de la Ciudad de México) en contenido, `#fuentes` y pie.
- La página se pre-renderiza (`prerender = true`) para que el sitemap incluya `/`.
- `public/robots.txt` permite el rastreo y apunta al sitemap.

## HTTPS, www y cabeceras

El código no puede forzar el salto de dominio: Cloudflare Workers sirve el Worker antes de evaluar reglas de archivo.
Configurar **una vez** en el panel de Cloudflare:

1. **SSL/TLS → Edge Certificates → Always Use HTTPS: On** (301 `http://*` → `https://*`).
2. **SSL/TLS → Edge Certificates → HSTS**: activar con `max-age=31536000; includeSubDomains`.
3. **Rules → Redirect Rules**: regla `Hostname = www.fuentecibeles.com` → 301 a `https://fuentecibeles.com${path}${query}`.

Las cabeceras de seguridad de las respuestas se aplican en dos frentes:

- `public/_headers` para los activos estáticos servidos desde `assets.directory`.
- `src/middleware.ts` para las respuestas renderizadas por el Worker (HSTS, nosniff, X-Frame-Options,
  Referrer-Policy y Permissions-Policy).

## PWA

- `public/manifest.webmanifest` (nombre, `start_url /`, `theme_color #183d38`, iconos 192/512/maskable).
- `public/sw.js`: network-first en navegación con respaldo offline a `/`.
- Iconos PNG generados desde `public/icons/favicon.svg` con `node scripts/prepare-assets.mjs`.

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

- `pnpm media:fetch` descarga las cuatro imágenes originales en `public/images/`.
- `pnpm prepare:assets` optimiza las fotografías (máx. 1600px, JPEG q82) y genera los iconos PNG del PWA.
- El sitio sirve las imágenes desde `public/images/` (rutas locales) y declara `og:image` absoluto con la foto principal.

## GA4

ID configurado: `G-HXM22WWPKP`.
