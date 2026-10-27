# Progreso

## Trabajo actual: ninguno
- Línea base de pruebas: no hay pruebas automáticas; verificación = `npm run check`, `npm run build` y revisión manual con evidencia.
- Rama `tarea/ghp-sitio-1` local, sin push; espera la revisión del orquestador y la segunda revisión del auditor. Etiqueta local `antes-de-ghp-sitio-1` sobre adc2a84. `tarea/base-minima` sigue local como respaldo.
- Pendientes de Ariel (detalle en [docs/PUBLICACION-CHECKLIST.md](docs/PUBLICACION-CHECKLIST.md)):
  - Cambiar Settings → Pages → Source de «Deploy from a branch» a «GitHub Actions» antes de fusionar (con «Deploy from a branch», GitHub no documenta qué pasa con el workflow: puede fallar o convivir con el build de Jekyll).
  - Decidir qué repos se muestran (`src/data/repos.ts` vacío; la portada muestra «[POR DECIDIR]» y no se publica así).
  - Aprobar los dos textos nuevos de la portada (frase de presentación y meta descripción).
  - Google Search Console: verificar la propiedad y enviar el sitemap.
  - Decidir si hay medición y con qué.
  - Tras la fusión: actualizar README «Estado» y AGENTS «Publicación», que describen el estado al 2026-10-27.
- Bajos de la auditoría, no se corrigen: el job build hereda los permisos top-level (`pages: write`, `id-token: write`); las acciones van fijadas por major y no por SHA.

## Terminados
- 2026-10-27 GHP-SITIO-1 — sitio Astro 7.4.2 (portada, 404, robots.txt, sitemap.xml, SEO, identidad AMR), workflow `deploy.yml` hacia GitHub Pages, documentación, correcciones de auditoría y `docs/PUBLICACION-CHECKLIST.md`, en `tarea/ghp-sitio-1` sin push · Ciclo: etapas aprobadas 5, auditoría hecha, rondas 1 · commits 00c246b, b5f080d, ce98a9c, 817824d, c700317 y el de cierre · pendiente: revisión del orquestador y del auditor; push y PR por su orden; pendientes de Ariel de arriba
- 2026-10-27 GHP-BASE-1 cierre — LESSONS.md (regla de deny `gh api * -X *`; `check-ignore` con patrones de directorio), push de `tarea/base-inicial` y PR 1 hacia `main`, fusionado por Ariel (adc2a84) · Ciclo: etapas aprobadas 4, auditoría hecha, rondas 0 · commit 62d3a9e · pendiente: nada
- 2026-10-27 GHP-BASE-1 etapa 4 (autorizada por Ariel) — remoto origin, `main` local con commit vacío «init» (f5e5e53), `tarea/base-inicial` con los commits de las etapas 1–3 copiados (67ba5ac, 84076ad, 4af10f3; diff vacío contra tarea/base-minima) · Ciclo: etapas aprobadas 3, auditoría hecha, rondas 1 · commit f6cf42d · pendiente: push de main (Ariel), push de la rama y PR
- 2026-10-27 GHP-BASE-1 etapa 3 (corrección de auditoría, autorizada por Ariel) — `gh api * -X *` sale de deny (no bloqueaba `-X` antes de la ruta, `--method` ni POST implícitos) y `gh api *` pasa a ask, en Bash y PowerShell · Ciclo: etapas aprobadas 2, auditoría hecha, rondas 1 · commit de esta etapa · pendiente: revisión del orquestador
- 2026-10-27 GHP-BASE-1 — base mínima local (PRD, README, AGENTS, CLAUDE, .gitignore, DECISIONS, PROGRESS y .claude/settings.json, autorizado por Ariel) en la rama tarea/base-minima · commits fafb12b, d6aa1a7 · pendiente: revisión del orquestador; repo remoto y Pages (Ariel); GHP-SITIO-1
