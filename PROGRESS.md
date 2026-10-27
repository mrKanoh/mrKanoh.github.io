# Progreso

## Trabajo actual: ninguno
- Línea base de pruebas: no hay pruebas automáticas; verificación = `npm run check`, `npm run build` y revisión manual con evidencia.
- Sitio publicado en https://mrkanoh.github.io desde `main` por `deploy.yml` (fuente de Pages «GitHub Actions»). Etiqueta local `antes-de-ghp-sitio-1` sobre adc2a84. `tarea/base-minima` sigue local como respaldo (decisión de Ariel).
- Pendientes de Ariel (detalle en [docs/PUBLICACION-CHECKLIST.md](docs/PUBLICACION-CHECKLIST.md)):
  - Google Search Console: verificar la propiedad y enviar el sitemap. Si Google entrega una etiqueta meta de verificación, se agrega con una orden nueva.
- Bajos de la auditoría, no se corrigen: el job build hereda los permisos top-level (`pages: write`, `id-token: write`); las acciones van fijadas por major y no por SHA.

## Terminados
- 2026-10-27 GHP-SITIO-1-POST — cierre posterior a la fusión: README «Estado» y «Cómo se publica», AGENTS «Publicación», checklist (#1, #36 y #42 con evidencia en producción; quedan #9 y #10) y PROGRESS al día; rama `tarea/ghp-sitio-1` borrada (local y remota) · commit de esta orden · pendiente: revisión del orquestador y fusión (Ariel)
- 2026-10-27 GHP-SITIO-1 — sitio Astro 7.4.2 (portada, 404, robots.txt, sitemap.xml, SEO, identidad AMR), workflow `deploy.yml` hacia GitHub Pages, documentación, correcciones de auditoría, `docs/PUBLICACION-CHECKLIST.md`, el repo decidido por Ariel (`wcag-accessibility-audit-skill`), textos de portada aprobados y sin medición · Ciclo: etapas aprobadas 6, auditoría hecha, rondas 1 · commits 00c246b, b5f080d, ce98a9c, 817824d, c700317, d7960f2, 8ff0695, de4be6d, 80f1567, 8573cc6 · fusionado por Ariel (dacd26c), publicado, run 40601772301 success · pendiente: Search Console (Ariel)
- 2026-10-27 GHP-BASE-1 cierre — LESSONS.md (regla de deny `gh api * -X *`; `check-ignore` con patrones de directorio), push de `tarea/base-inicial` y PR 1 hacia `main`, fusionado por Ariel (adc2a84) · Ciclo: etapas aprobadas 4, auditoría hecha, rondas 0 · commit 62d3a9e · pendiente: nada
- 2026-10-27 GHP-BASE-1 etapa 4 (autorizada por Ariel) — remoto origin, `main` local con commit vacío «init» (f5e5e53), `tarea/base-inicial` con los commits de las etapas 1–3 copiados (67ba5ac, 84076ad, 4af10f3; diff vacío contra tarea/base-minima) · Ciclo: etapas aprobadas 3, auditoría hecha, rondas 1 · commit f6cf42d · pendiente: push de main (Ariel), push de la rama y PR
- 2026-10-27 GHP-BASE-1 etapa 3 (corrección de auditoría, autorizada por Ariel) — `gh api * -X *` sale de deny (no bloqueaba `-X` antes de la ruta, `--method` ni POST implícitos) y `gh api *` pasa a ask, en Bash y PowerShell · Ciclo: etapas aprobadas 2, auditoría hecha, rondas 1 · commit de esta etapa · pendiente: revisión del orquestador
- 2026-10-27 GHP-BASE-1 — base mínima local (PRD, README, AGENTS, CLAUDE, .gitignore, DECISIONS, PROGRESS y .claude/settings.json, autorizado por Ariel) en la rama tarea/base-minima · commits fafb12b, d6aa1a7 · pendiente: revisión del orquestador; repo remoto y Pages (Ariel); GHP-SITIO-1
