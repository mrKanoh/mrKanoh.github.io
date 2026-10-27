# Reglas para agentes — mrkanoh.github.io

Sitio estático previsto (Astro + GitHub Pages) en https://mrkanoh.github.io. Descripción: [README.md](README.md). Alcance: [docs/PRD.md](docs/PRD.md).

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

## Publicación

Aún no publica nada. Cuando exista el workflow, un push o fusión a `main` lo dispara y publica en producción. Requiere autorización expresa de Ariel.

## No tocar sin orden

- `main` (ni commits, ni push, ni merge).
- `.github/workflows/`.
- `.claude/settings*.json`.
- El repositorio de elari.work (`D:\Proyectos\portafolio-v2`): solo lectura como referencia.
