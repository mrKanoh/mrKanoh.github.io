import type { APIRoute } from 'astro';
import { publicPaths, siteMeta } from '../data/site';

// Sitemap de las páginas públicas. La 404 no figura: lleva noindex.
export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL(siteMeta.origin);
  const urls = publicPaths.map((path) => `  <url><loc>${new URL(path, origin).href}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
