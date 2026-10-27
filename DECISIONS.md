# Decisiones

## 2026-10-27 — Concepto, dirección y stack (Ariel)

- **Concepto:** escaparate de código. Muestra los proyectos de código de la cuenta `mrKanoh` y enlaza a https://elari.work para los casos UX/UI, sin repetirlos.
- **Dirección:** sitio de usuario https://mrkanoh.github.io, en el repositorio `mrKanoh.github.io` (GitHub exige el nombre `<user>.github.io` para el sitio de usuario).
- **Stack:** Astro publicado con GitHub Actions.
  - Astro: el mismo stack de elari.work, para reutilizar sus tokens de diseño (colores, tipografías).
  - GitHub Actions: Astro no es Jekyll, y para generadores distintos de Jekyll GitHub recomienda publicar con Actions (https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## 2026-10-27 — Sin el dominio elari.work

No se usa elari.work (ni un subdominio suyo) como dominio de este sitio, salvo orden de Ariel. Contexto: elari.work ya es el portafolio publicado (Cloudflare), y un dominio propio en el sitio de usuario lo heredan por defecto los sitios de proyecto de la cuenta (https://docs.github.com/es/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages).

## 2026-10-27 — Versiones del sitio y del workflow (GHP-SITIO-1)

- **Astro 7.4.2**, `@astrojs/check` 0.9.12 y `typescript` 6.0.3, fijados en versión exacta. Fuente: `npm view <paquete> version` (2026-10-27). Astro 7.4.2 exige Node >=22.23.4, que se copia en `engines`.
- **Fuentes:** `@fontsource/inter` y `@fontsource/ibm-plex-mono` 5.3.0, las dos tipografías AMR que usa el sitio.
- **Sin integraciones:** robots.txt y sitemap.xml son endpoints propios (`src/pages/*.ts`), como en elari.work.
- **Acciones:** `actions/checkout@v7` (v7.0.1), `actions/setup-node@v7` (v7.1.0), `actions/configure-pages@v6` (v6.0.0), `actions/upload-pages-artifact@v5` (v5.0.0) y `actions/deploy-pages@v5` (v5.0.1). Fuente: `gh release view --repo actions/<acción>` (2026-10-27). Los ejemplos de la documentación de GitHub muestran majors anteriores.
- **Workflow explícito** (configure-pages, upload-pages-artifact, deploy-pages) en lugar de `withastro/action`: cada paso queda a la vista y con su versión fijada, sigue la guía de GitHub para flujos personalizados (https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) y evita una capa de terceros que decide por su cuenta cómo instalar y compilar.
- **Node 24 en CI:** cumple `engines` (>=22.23.4), coincide con el Node local (v24) y es el que usa por defecto la acción de Astro (https://docs.astro.build/en/guides/deploy/github/).
- **Sitio de usuario sin `base`:** el repo se llama `mrKanoh.github.io`, así que el sitio vive en la raíz (`site: 'https://mrkanoh.github.io'`).

## 2026-10-27 — Cambio de fuente de Pages antes de fusionar (Ariel, opción A)

Contexto: la auditoría de la etapa 3 de GHP-SITIO-1 encontró que Pages ya estaba activo en «Deploy from a branch» (Jekyll, `main`, `/`), publicando el README y los `.md` del repo. Decisión: no se toca nada en GitHub durante GHP-SITIO-1. Ariel cambia Settings → Pages → Source a «GitHub Actions» justo antes de fusionar. Motivo: con la fuente en «Deploy from a branch», GitHub no documenta qué pasa con un workflow de Pages; puede fallar o convivir con el build de Jekyll.
