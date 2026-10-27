import type { APIRoute } from 'astro';
import { siteMeta } from '../data/site';

// Sin bloqueos: la 404 se excluye con noindex, y un Disallow impediría leerlo.
export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL(siteMeta.origin);
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', origin).href}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
