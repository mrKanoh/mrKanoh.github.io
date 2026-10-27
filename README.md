# mrkanoh.github.io

Página personal de GitHub Pages de Ariel Mesina Ramírez (AMR): escaparate de los proyectos de código de la cuenta `mrKanoh`, con la identidad visual del portafolio https://elari.work. Los casos UX/UI no se repiten aquí: se enlazan a elari.work. Alcance y criterios en [docs/PRD.md](docs/PRD.md).

## Dirección

https://mrkanoh.github.io (sitio de usuario; repositorio público `mrKanoh/mrKanoh.github.io`).

## Stack

Astro (sitio estático) publicado con GitHub Actions. Motivos y versiones en [DECISIONS.md](DECISIONS.md).

## Estado

- Al 2026-10-27, el sitio Astro (portada, 404, robots.txt, sitemap.xml) y el workflow `.github/workflows/deploy.yml` están en la rama `tarea/ghp-sitio-1`, sin fusionar.
- **Al 2026-10-27, GitHub Pages publica `main` con Jekyll** (fuente «Deploy from a branch», rama `main`, carpeta `/`): https://mrkanoh.github.io muestra este README y también sirve los demás `.md` del repositorio.
- **Lista de repositorios pendiente:** `src/data/repos.ts` está vacío y la portada muestra el marcador «[POR DECIDIR] Lista de repositorios pendiente de Ariel». Ariel decide qué repos se muestran; el sitio no se publica con el marcador.
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

1. **Antes de fusionar**, Ariel cambia Settings → Pages → Source de «Deploy from a branch» a **«GitHub Actions»**. Con la fuente en «Deploy from a branch», GitHub no documenta qué pasa con `deploy.yml`: puede fallar o convivir con el build de Jekyll. Por eso el cambio va antes de fusionar.
2. Ariel fusiona a `main`. El push a `main` dispara `deploy.yml`: compila Astro (`npm ci`, `npm run build`) y publica `dist/` en el entorno `github-pages` con `actions/configure-pages`, `actions/upload-pages-artifact` y `actions/deploy-pages`.
3. Cada push o fusión posterior a `main` publica en producción. Requiere autorización de Ariel. La publicación puede tardar unos minutos.

## Cómo volver atrás

- **Volver a una versión anterior del sitio:** revertir en `main` el commit de fusión (`git revert -m 1 <merge>`) y subirlo; el workflow vuelve a publicar la versión anterior. También se puede re-ejecutar desde la pestaña Actions el run de un despliegue anterior.
- **Volver al sitio Jekyll de antes:** cambiar Settings → Pages → Source de nuevo a «Deploy from a branch» (rama `main`, carpeta `/`). Si `main` ya tiene el sitio Astro, además hay que revertir la fusión, porque Jekyll publicaría el repositorio tal como esté.
