# Decisiones

## 2026-10-27 — Concepto, dirección y stack (Ariel)

- **Concepto:** escaparate de código. Muestra los proyectos de código de la cuenta `mrKanoh` y enlaza a https://elari.work para los casos UX/UI, sin repetirlos.
- **Dirección:** sitio de usuario https://mrkanoh.github.io, en el repositorio `mrKanoh.github.io` (GitHub exige el nombre `<user>.github.io` para el sitio de usuario).
- **Stack:** Astro publicado con GitHub Actions.
  - Astro: el mismo stack de elari.work, para reutilizar sus tokens de diseño (colores, tipografías).
  - GitHub Actions: Astro no es Jekyll, y para generadores distintos de Jekyll GitHub recomienda publicar con Actions (https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## 2026-10-27 — Sin el dominio elari.work

No se usa elari.work (ni un subdominio suyo) como dominio de este sitio, salvo orden de Ariel. Contexto: elari.work ya es el portafolio publicado (Cloudflare), y un dominio propio en el sitio de usuario lo heredan por defecto los sitios de proyecto de la cuenta (https://docs.github.com/es/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages).
