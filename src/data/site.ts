/**
 * Datos compartidos del sitio. Nombre, cargo y enlaces salen de elari.work
 * (portafolio-v2, src/data/site.ts); aquí no se agrega información nueva.
 */
export const person = {
  name: 'Ariel Mesina Ramírez',
  jobTitle: 'Full Stack Developer con foco en Frontend',
};

export const links = {
  portfolio: 'https://elari.work',
  cv: 'https://elari.work/cv/',
  github: 'https://github.com/mrKanoh',
};

export const siteMeta = {
  origin: 'https://mrkanoh.github.io',
  name: 'AMR',
  shareImage: {
    path: '/share/amr-compartir-1200x630.png',
    width: 1200,
    height: 630,
    alt: 'AMR: retrato de Ariel Mesina Ramírez, Full Stack Developer con foco en Frontend, sobre fondo marfil con detalles azul y naranja',
  },
};

/** Páginas públicas, en el orden del sitemap. La 404 queda fuera: lleva noindex. */
export const publicPaths = ['/'];
