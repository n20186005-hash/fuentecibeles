# Self-check status

## Verificado en este entorno

- `package.json` es JSON válido y fija versiones exactas.
- No existe `pnpm-workspace.yaml`.
- `site` se configura en un único punto (`astro.config.mjs`) y queda vacío por defecto.
- La integración de sitemap se activa sólo cuando `SITE` tiene valor.
- No se encontraron `example.com`, `localhost` ni `chrome-extension://` en el código fuente.
- `src/data/site.ts`, `scripts/fetch-media.mjs` y `astro.config.mjs` superaron comprobación sintáctica local con Node.
- Logo, favicon SVG y favicons PNG 16/32/180 están incluidos.

## Bloqueado por el entorno de ejecución

El contenedor de generación no puede abrir conexiones salientes a npm ni Wikimedia. Por ese motivo no fue posible:

1. descargar pnpm 12.3.4 mediante Corepack;
2. generar un `pnpm-lock.yaml` auténtico y sincronizado;
3. ejecutar `pnpm install --frozen-lockfile`, `pnpm check` y `pnpm build`;
4. descargar las fotografías de Wikimedia y guardarlas físicamente como JPG dentro del ZIP.

No se marca ninguna de esas comprobaciones como aprobada. El sitio usa temporalmente las URLs reales de Wikimedia Commons y contiene `pnpm media:fetch` para localizarlas en un entorno con red.
