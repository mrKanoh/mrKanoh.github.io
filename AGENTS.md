# Reglas para agentes — mrkanoh.github.io

Sitio estático previsto (Astro + GitHub Pages) en https://mrkanoh.github.io. Descripción: [README.md](README.md). Alcance: [docs/PRD.md](docs/PRD.md).

## Dónde trabajar

- Repositorio: `D:\Proyectos\mrKanoh.github.io`.
- Remoto previsto: `https://github.com/mrKanoh/mrKanoh.github.io` (aún no existe; lo crea Ariel).
- Rama principal: `main`.
- El estado del trabajo vive en [PROGRESS.md](PROGRESS.md), no en el chat.

## Verificación

- Por ahora: `git diff --check` (o `git diff --cached --check` antes de cada commit).
- Los comandos de Astro (`npm run check`, `npm run build`) se agregan aquí cuando exista el sitio (orden GHP-SITIO-1).

## Publicación

Aún no publica nada. Cuando exista el workflow, un push o fusión a `main` lo dispara y publica en producción. Requiere autorización expresa de Ariel.

## No tocar sin orden

- `main` (ni commits, ni push, ni merge).
- `.github/workflows/`.
- `.claude/settings*.json`.
- El repositorio de elari.work (`D:\Proyectos\portafolio-v2`): solo lectura como referencia.
