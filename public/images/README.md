# Fotografías

El código usa temporalmente las URLs estables de miniaturas de Wikimedia Commons declaradas en `src/data/site.ts`.

Para dejar las cuatro imágenes dentro de `public/images/`, ejecuta:

```bash
pnpm media:fetch
```

Después cambia `src` de cada elemento de `photos` a `/images/<localName>`.

Los nombres, autores, licencias y páginas de origen están documentados en `SOURCES.md`.
