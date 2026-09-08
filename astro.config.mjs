import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ÚNICO PUNTO DE CONFIGURACIÓN DEL DOMINIO.
// Dejar vacío permite construir el proyecto sin dominio.
const SITE = '';

export default defineConfig({
  site: SITE || undefined,
  output: 'server',
  adapter: cloudflare(),
  integrations: SITE ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()]
  }
});
