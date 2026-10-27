# Lecciones

## 2026-10-27 — Regla de deny `gh api * -X *` que no bloqueaba nada útil

- **Qué pasó:** en GHP-BASE-1 etapa 2 se agregó `Bash(gh api * -X *)` / `PowerShell(gh api * -X *)` en deny para bloquear llamadas de escritura a la API de GitHub. No bloqueaba `gh api -X POST …`, `gh api --method …` ni los POST implícitos. Lo detectó la auditoría de cierre; se corrigió en la etapa 3.
- **Causa:** en los permisos de Claude Code, todo lo anterior al primer `*` se toma literal y el espacio antes de `*` cuenta (https://code.claude.com/docs/en/permissions, «Wildcard patterns»). Además, `gh api` hace POST implícito con `-f`, `-F` o `--input`, sin `-X`.
- **Prevención:** para comandos con flags en cualquier posición, usar `ask` sobre el prefijo (`gh api *`) en vez de un deny por flag. Revisar cada regla nueva contra las formas reales del comando antes del commit.

## 2026-10-27 — `git check-ignore node_modules dist` sin salida aunque `.gitignore` esté bien

- **Qué pasó:** en GHP-BASE-1 etapa 1, `git check-ignore .env node_modules dist` solo reportó `.env`, y pareció que faltaban reglas.
- **Causa:** los patrones con barra final (`node_modules/`, `dist/`, `.astro/`) solo coinciden con directorios, y esas rutas aún no existían.
- **Prevención:** verificar con `git check-ignore -v --no-index node_modules/ dist/ .astro/` (con la barra) o con un archivo hijo (`dist/index.html`).

## 2026-10-27 — Orden basada en un estado de Pages que no se verificó

- **Qué pasó:** la orden GHP-SITIO-1 asumió que Pages no estaba activado, sin verificarlo. GitHub ya publicaba `main` con Jekyll («Deploy from a branch», `/`), incluidos README, PROGRESS, AGENTS y docs/PRD. Fusionar sin cambiar la fuente habría dejado dos despliegues compitiendo. Lo detectó la auditoría de la etapa 3.
- **Causa:** el orquestador tomó el estado de una plataforma externa del texto de la solicitud, sin consultarlo.
- **Prevención:** antes de redactar una orden que dependa de una plataforma, consultar su estado real y citarlo en la orden. Para Pages: `gh api repos/<owner>/<repo>/pages` (solo lectura; `build_type` dice `legacy` o `workflow`).
