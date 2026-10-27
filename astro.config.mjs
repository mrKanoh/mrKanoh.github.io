import { defineConfig } from 'astro/config';

export default defineConfig({
  // Sitio de usuario de GitHub Pages: va en la raíz del dominio, por eso no lleva `base`.
  // Se usa para las direcciones canónicas, Open Graph y el sitemap.
  site: 'https://mrkanoh.github.io',
  output: 'static',
});
