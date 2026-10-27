# mrkanoh.github.io

Página personal de GitHub Pages de Ariel Mesina Ramírez (AMR): escaparate de los proyectos de código de la cuenta `mrKanoh`, con la identidad visual del portafolio https://elari.work. Los casos UX/UI no se repiten aquí: se enlazan a elari.work. Alcance y criterios en [docs/PRD.md](docs/PRD.md).

## Dirección prevista

https://mrkanoh.github.io (sitio de usuario; el repositorio debe llamarse `mrKanoh.github.io`).

## Stack decidido

Astro, publicado con GitHub Actions. Motivos en [DECISIONS.md](DECISIONS.md).

## Estado

Base mínima de documentos y permisos. **Aún no hay código del sitio, ni workflow, ni repositorio remoto.** El estado del trabajo vive en [PROGRESS.md](PROGRESS.md).

## Cómo se publicará

1. Ariel crea el repositorio público `mrKanoh/mrKanoh.github.io` en GitHub.
2. Ariel elige la fuente **«GitHub Actions»** en Settings → Pages.
3. Un workflow en `.github/workflows/` (orden GHP-SITIO-1, aún no existe) compila Astro y publica en el entorno `github-pages` con `actions/configure-pages`, `actions/upload-pages-artifact` y `actions/deploy-pages`.
4. Cada push o fusión a `main` publicará en producción. Requiere autorización de Ariel. La primera publicación puede tardar hasta 10 minutos.
