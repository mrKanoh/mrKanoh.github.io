# Reglas para agentes — mrkanoh.github.io

Sitio estático (Astro + GitHub Pages) en https://mrkanoh.github.io. Descripción: [README.md](README.md). Alcance: [docs/PRD.md](docs/PRD.md).

## Dónde trabajar

- Repositorio: `D:\Proyectos\mrKanoh.github.io`.
- Remoto: `https://github.com/mrKanoh/mrKanoh.github.io` (público).
- Rama principal: `main`.
- El estado del trabajo vive en [PROGRESS.md](PROGRESS.md), no en el chat.

## Verificación

- No hay pruebas automáticas; la verificación es `check`, `build` y revisión manual con evidencia.
- Requiere Node >=22.23.4 (`engines` de `package.json`). Instalar con `npm ci`.
- `npm run check` (astro check) y `npm run build` (astro build, salida en `dist/`): ambos sin errores.
- `git diff --check` (o `git diff --cached --check` antes de cada commit).
- `.gitignore`: `git check-ignore -v --no-index node_modules/ dist/ .astro/` (con barra final; ver [LESSONS.md](LESSONS.md)).
- Workflows: `actionlint .github/workflows/deploy.yml` sin salida.

## Publicación

- **Al 2026-10-27:** GitHub Pages publica `main` con Jekyll (fuente «Deploy from a branch», rama `main`, carpeta `/`), y el sitio Astro y `.github/workflows/deploy.yml` están en `tarea/ghp-sitio-1`, sin fusionar.
- Antes de fusionar el sitio Astro, Ariel cambia Settings → Pages → Source a «GitHub Actions». Con la fuente en «Deploy from a branch», GitHub no documenta qué pasa con `deploy.yml`: puede fallar o convivir con el build de Jekyll.
- Con la fuente en «GitHub Actions», cada push o fusión a `main` dispara `deploy.yml` y **publica en producción**. Requiere autorización expresa de Ariel.
- Prohibido ejecutar `workflow_dispatch` (o `gh workflow run`) sin orden expresa: también publica en producción.
- Antes de una orden que dependa del estado de Pages, consultarlo (solo lectura): `gh api repos/mrKanoh/mrKanoh.github.io/pages`.

## No tocar sin orden

- `main` (ni commits, ni push, ni merge).
- `.github/workflows/`: los workflows se crean o editan solo con orden que lo diga.
- Ajustes del repositorio en GitHub (Pages, entornos, ramas protegidas): los cambia Ariel.
- `.claude/settings*.json`.
- El repositorio de elari.work (`D:\Proyectos\portafolio-v2`): solo lectura como referencia.
