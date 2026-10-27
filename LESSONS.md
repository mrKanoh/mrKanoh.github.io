# Lecciones

## 2026-10-27 — Regla de deny `gh api * -X *` que no bloqueaba nada útil

- **Qué pasó:** en GHP-BASE-1 etapa 2 se agregó `Bash(gh api * -X *)` / `PowerShell(gh api * -X *)` en deny para bloquear llamadas de escritura a la API de GitHub. No bloqueaba `gh api -X POST …`, `gh api --method …` ni los POST implícitos. Lo detectó la auditoría de cierre; se corrigió en la etapa 3.
- **Causa:** en los permisos de Claude Code, todo lo anterior al primer `*` se toma literal y el espacio antes de `*` cuenta (https://code.claude.com/docs/en/permissions, «Wildcard patterns»). Además, `gh api` hace POST implícito con `-f`, `-F` o `--input`, sin `-X`.
- **Prevención:** para comandos con flags en cualquier posición, usar `ask` sobre el prefijo (`gh api *`) en vez de un deny por flag. Revisar cada regla nueva contra las formas reales del comando antes del commit.

## 2026-10-27 — `git check-ignore node_modules dist` sin salida aunque `.gitignore` esté bien

- **Qué pasó:** en GHP-BASE-1 etapa 1, `git check-ignore .env node_modules dist` solo reportó `.env`, y pareció que faltaban reglas.
- **Causa:** los patrones con barra final (`node_modules/`, `dist/`, `.astro/`) solo coinciden con directorios, y esas rutas aún no existían.
- **Prevención:** verificar con `git check-ignore -v --no-index node_modules/ dist/ .astro/` (con la barra) o con un archivo hijo (`dist/index.html`).
