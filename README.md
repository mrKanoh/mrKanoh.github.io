# mrkanoh.github.io

Página personal de GitHub Pages de Ariel Mesina Ramírez (AMR): escaparate de los proyectos de código de la cuenta `mrKanoh`, con la identidad visual del portafolio https://elari.work. Los casos UX/UI no se repiten aquí: se enlazan a elari.work. Alcance y criterios en [docs/PRD.md](docs/PRD.md).

## Dirección

https://mrkanoh.github.io (sitio de usuario; repositorio público `mrKanoh/mrKanoh.github.io`).

## Stack

Astro (sitio estático) publicado con GitHub Actions. Motivos y versiones en [DECISIONS.md](DECISIONS.md).

## Estado

- **Al 2026-10-27, el sitio Astro está publicado** en https://mrkanoh.github.io: portada, 404, robots.txt y sitemap.xml. Lo publica `.github/workflows/deploy.yml` desde `main` (fusión del PR 2, dacd26c; run 40601772301 en success).
- La fuente de GitHub Pages es «GitHub Actions». Jekyll ya no está en uso: los `.md` del repositorio ya no se sirven.
- **Repositorios:** la lista de `src/data/repos.ts` la decide Ariel. Al 2026-10-27 muestra solo `wcag-accessibility-audit-skill`. Si la lista queda vacía, la portada muestra un marcador «[POR DECIDIR]» y el sitio no se publica así.
- **Textos de la portada:** la frase de presentación y la meta descripción los aprobó Ariel el 2026-10-27.
- El estado del trabajo vive en [PROGRESS.md](PROGRESS.md).

## Correr en local

Requiere Node >=22.23.4.

```bash
npm ci
```

```bash
npm run dev
```

Verificar antes de entregar:

```bash
npm run check
```

```bash
npm run build
```

`npm run preview` sirve el build de `dist/` en local.

## Cómo se publica

La fuente de GitHub Pages es «GitHub Actions» (Settings → Pages → Source).

1. Ariel fusiona a `main`. El push a `main` dispara `deploy.yml`: compila Astro (`npm ci`, `npm run build`) y publica `dist/` en el entorno `github-pages` con `actions/configure-pages`, `actions/upload-pages-artifact` y `actions/deploy-pages`.
2. Cada push o fusión a `main` publica en producción. Requiere autorización de Ariel. La publicación puede tardar unos minutos.

## Cómo volver atrás

- **Volver a una versión anterior del sitio:** revertir en `main` el commit de fusión (`git revert -m 1 <merge>`) y subirlo; el workflow vuelve a publicar la versión anterior. También se puede re-ejecutar desde la pestaña Actions el run de un despliegue anterior.
- **Volver al sitio Jekyll de antes (solo el README):** cambiar Settings → Pages → Source de nuevo a «Deploy from a branch» (rama `main`, carpeta `/`) y revertir la fusión del PR 2 (dacd26c), porque Jekyll publicaría el repositorio tal como esté.
