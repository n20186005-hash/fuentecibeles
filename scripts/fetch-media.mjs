import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(here, '../public/images');
await mkdir(out, { recursive: true });

const files = [
  ['fuente-cibeles-vista-general.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/FuenteDeLasCibelesp4v2.jpg/1280px-FuenteDeLasCibelesp4v2.jpg'],
  ['fuente-cibeles-escultura.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/FuenteDeLasCibelesP2v2.jpg/1280px-FuenteDeLasCibelesP2v2.jpg'],
  ['fuente-cibeles-plaza.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Vista_general_de_la_Fuente_de_los_Cibeles_Ciudad_de_M%C3%A9xico.jpg/1280px-Vista_general_de_la_Fuente_de_los_Cibeles_Ciudad_de_M%C3%A9xico.jpg'],
  ['fuente-cibeles-frontal.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Fuente_de_los_Cibeles_en_la_CDMX_vista_de_frente.jpg/1280px-Fuente_de_los_Cibeles_en_la_CDMX_vista_de_frente.jpg']
];

for (const [name, url] of files) {
  const response = await fetch(url, { redirect: 'follow' });
  if (!response.ok) throw new Error(`${name}: HTTP ${response.status}`);
  const type = response.headers.get('content-type') || '';
  if (!type.startsWith('image/')) throw new Error(`${name}: contenido inesperado ${type}`);
  await writeFile(path.join(out, name), Buffer.from(await response.arrayBuffer()));
  console.log(`✓ ${name}`);
}
