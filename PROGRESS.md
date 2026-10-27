# Progreso

## Trabajo actual: ninguno
- Línea base de pruebas: no hay pruebas; verificación manual.
- Rama vigente: `tarea/base-inicial`, sobre `main` local con el commit vacío «init» (f5e5e53). Remoto `origin` = https://github.com/mrKanoh/mrKanoh.github.io.git (repo público, creado por Ariel, vacío).
- `tarea/base-minima` queda local como respaldo, sin borrar.
- Pendientes:
  - Ariel: `git push -u origin main`.
  - Después: push de `tarea/base-inicial` y PR (orden del orquestador).
  - Ariel: activar Pages con fuente «GitHub Actions».
  - GHP-SITIO-1: Astro + workflow de GitHub Pages.

## Terminados
- 2026-10-27 GHP-BASE-1 etapa 4 (autorizada por Ariel) — remoto origin, `main` local con commit vacío «init» (f5e5e53), `tarea/base-inicial` con los commits de las etapas 1–3 copiados (67ba5ac, 84076ad, 4af10f3; diff vacío contra tarea/base-minima) · Ciclo: etapas aprobadas 3, auditoría hecha, rondas 1 · commit de esta etapa · pendiente: push de main (Ariel), push de la rama y PR
- 2026-10-27 GHP-BASE-1 etapa 3 (corrección de auditoría, autorizada por Ariel) — `gh api * -X *` sale de deny (no bloqueaba `-X` antes de la ruta, `--method` ni POST implícitos) y `gh api *` pasa a ask, en Bash y PowerShell · Ciclo: etapas aprobadas 2, auditoría hecha, rondas 1 · commit de esta etapa · pendiente: revisión del orquestador
- 2026-10-27 GHP-BASE-1 — base mínima local (PRD, README, AGENTS, CLAUDE, .gitignore, DECISIONS, PROGRESS y .claude/settings.json, autorizado por Ariel) en la rama tarea/base-minima · commits fafb12b, d6aa1a7 · pendiente: revisión del orquestador; repo remoto y Pages (Ariel); GHP-SITIO-1
