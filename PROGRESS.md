# Progreso

## Trabajo actual: GHP-SITIO-1 Sitio Astro + workflow de GitHub Pages  (rama tarea/ghp-sitio-1)
- Etapas: [x] 1 base del proyecto Astro (commit 00c246b) · [x] 2 páginas, identidad y SEO (commit b5f080d) · [x] 3 workflow de GitHub Pages (commit ce98a9c) · [x] 4 documentación y correcciones de auditoría (commit 817824d) · [x] 5 correcciones de auditoría de cierre (commit de esta etapa)
- Ciclo: etapas aprobadas 4, auditoría hecha (1.ª pasada de cierre), rondas 1
- Línea base de pruebas: no hay pruebas automáticas. Verificación = `npm run check`, `npm run build` y revisión manual con evidencia. Al empezar (main = origin/main = adc2a84) no había código del sitio.
- Estado del repo: remoto `origin` = https://github.com/mrKanoh/mrKanoh.github.io (público); PR 1 (`tarea/base-inicial`) fusionado en `main` (adc2a84). Etiqueta local `antes-de-ghp-sitio-1` sobre adc2a84. `tarea/base-minima` sigue local como respaldo.
- Estado de Pages (auditoría etapa 3, 2026-10-27): ya publica `main` con Jekyll («Deploy from a branch», `/`; API `build_type` legacy). Decisión de Ariel (opción A): no se toca GitHub ahora.
- Pendiente / bloqueos:
  - Ariel: cambiar la fuente de Pages a «GitHub Actions» antes de fusionar (con «Deploy from a branch», GitHub no documenta qué pasa con el workflow: puede fallar o convivir con el build de Jekyll).
  - Tras la fusión: actualizar README «Estado» y AGENTS «Publicación», que describen el estado al 2026-10-27.
  - Ariel: qué repos se muestran (`src/data/repos.ts` vacío; la portada muestra el marcador «[POR DECIDIR]» y no se publica así).
  - Ariel: aprobar los textos nuevos de la portada (frase de presentación y meta descripción); los consulta el orquestador al cierre.
  - Orquestador: auditoría de cierre (build limpio, lychee, gitleaks, npm audit, Lighthouse); push y PR solo por su orden.
  - Bajos de la auditoría, no se corrigen: el job build hereda los permisos top-level (`pages: write`, `id-token: write`); las acciones van fijadas por major y no por SHA.

### Orden completa
```
Proyecto: mrKanoh.github.io — D:\Proyectos\mrKanoh.github.io
Id: GHP-SITIO-1
Tamaño: grande — crea el workflow de despliegue (infraestructura) y más de 10 archivos
Etiqueta antes-de-*: sí (antes-de-ghp-sitio-1, sobre main adc2a84)
Tipo de solicitud: implementación
Autorizado: crear la rama tarea/ghp-sitio-1 desde main actualizada, editar y verificar, un commit local por etapa verificada, crear `.github/workflows/deploy.yml` (esta orden levanta para ese archivo el «No tocar sin orden» de AGENTS.md), instalar dependencias npm listadas abajo (generar package-lock.json).
No autorizado: push, PR, merge, tocar main, activar Pages o cambiar ajustes del repo en GitHub, `gh api` de escritura, tocar `.claude/settings*.json`, editar D:\Proyectos\portafolio-v2 (solo lectura), borrar la rama tarea/base-minima, dominio propio, medición o analítica, versión en inglés, inventar contenido.

Objetivo
Sitio Astro estático en español para https://mrkanoh.github.io, con identidad visual AMR, que compila sin errores y se publica con un workflow de GitHub Actions hacia GitHub Pages cuando Ariel fusione a main y active Pages. Alcance según docs/PRD.md.

Contexto (verificado por el orquestador el 2026-10-27)
- Astro vigente: 7.4.2 (npm view astro version); requiere node >=22.23.4 (engines). @astrojs/check 0.9.12, typescript 6.0.x (peer ^5 || ^6). Node local v24.4.1, npm 11.4.2.
- Guía oficial de Astro para GitHub Pages: https://docs.astro.build/en/guides/deploy/github/ — sitio de usuario: `site: 'https://mrkanoh.github.io'` y SIN `base` (el repo se llama <user>.github.io). Permisos contents: read, pages: write, id-token: write; job deploy con environment github-pages y url desde la salida del paso. Commitear el lockfile. Node 24 por defecto en su acción.
- Doc oficial de GitHub, flujos personalizados: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages — el deploy necesita al menos pages: write e id-token: write; environment github-pages; `needs: build`; artefacto sin enlaces simbólicos ni duros. Sus ejemplos muestran versiones atrasadas (configure-pages@v5, upload-pages-artifact@v4, deploy-pages@v4).
- Versiones vigentes según `gh release view` (2026-10-27): actions/checkout v7.0.1, actions/setup-node v7.1.0, actions/configure-pages v6.0.0, actions/upload-pages-artifact v5.0.0, actions/deploy-pages v5.0.1. Usa esos majors (@v7, @v7, @v6, @v5, @v5). Si al implementar ves otra versión major vigente, detente y repórtalo.
- Referencia de diseño, SOLO LECTURA: D:\Proyectos\portafolio-v2\tmp\release-repository — src/styles/tokens.css, src/styles/global.css, src/layouts/BaseLayout.astro, src/components (Header, SiteFooter, ProjectCard…), src/data/site.ts (nombre «Ariel Mesina Ramírez», cargo «Full Stack Developer con foco en Frontend», GitHub y LinkedIn reales), public/share/*.png, src/pages/robots.txt.ts y sitemap.xml.ts.
- LESSONS.md: (1) permisos con ask sobre prefijos, no deny por flag; (2) verifica .gitignore con barra final: `git check-ignore -v --no-index node_modules/ dist/ .astro/`.
- PROGRESS.md y AGENTS.md están desactualizados (dicen que el PR 1 está pendiente y que el remoto no existe). Corrígelo en la etapa 1.

Alcance
- Incluye: package.json + lockfile, astro.config, tokens y estilos AMR mínimos copiados/adaptados, layout base con SEO (título, descripción ≤160, canónica, Open Graph con imagen 1200×630, JSON-LD mínimo opcional), portada (presentación breve, lista de proyectos de código, enlaces a https://elari.work, al CV en https://elari.work/cv/ y a https://github.com/mrKanoh), 404 propia (noindex, sin datos internos), robots.txt y sitemap.xml, workflow deploy.yml, documentación (README, AGENTS, DECISIONS, PROGRESS).
- No incluye: casos UX/UI de elari.work (solo se enlazan), copiar el PDF del CV, backend, formularios, medición, dominio, CNAME, inglés, correo hola@elari.work, componentes que no se usen.

Antes de empezar (preflight)
1. Lee AGENTS.md, README.md, docs/PRD.md, DECISIONS.md, PROGRESS.md y LESSONS.md.
2. `git status --short --branch`; trata cambios existentes como ajenos. `git fetch` y confirma main = origin/main = adc2a84.
3. Resume objetivo, estado, restricciones y siguiente paso.

Tarea (al cerrar cada etapa: verifica, commit, actualiza PROGRESS.md, DETENTE e informa; espera al orquestador)

Etapa 1 — Base del proyecto Astro
- Etiqueta `antes-de-ghp-sitio-1` en main y rama `tarea/ghp-sitio-1` desde main.
- Línea base: no hay pruebas; regístralo en PROGRESS.md (verificación = check, build, revisión manual con evidencia). Corrige lo desactualizado de PROGRESS.md y AGENTS.md (PR 1 fusionado; remoto existe).
- package.json a mano (sin `npm create astro`): "private": true, "type": "module", engines.node ">=22.23.4", scripts dev/check/build/preview (`astro check`, `astro build`…). Dependencias fijadas en versión exacta: astro 7.4.2, @astrojs/check 0.9.12, typescript 6.0.x, y las @fontsource que de verdad uses. Sin otras integraciones salvo que las justifiques (sitemap: prefiere un endpoint propio como la referencia). Genera package-lock.json (npm install pedirá aprobación a Ariel en tu chat; es esperable).
- astro.config.mjs: `site: 'https://mrkanoh.github.io'`, output static, sin base. tsconfig que extienda el de Astro.
- Verifica: `npm run check`, `npm run build`, `git check-ignore -v --no-index node_modules/ dist/ .astro/`, `git diff --check`. Actualiza la sección Verificación de AGENTS.md con los comandos reales.

Etapa 2 — Páginas, identidad y SEO
- Tokens y estilos AMR solo lo necesario (marfil #f1ece8, carbón #242625, texto naranja #b9370a, texto azul #1d4ed8, tipografías). Contraste AA.
- Portada: presentación breve con datos que ya están en la referencia (nombre, cargo); nada inventado (sin años, empleadores, cifras ni afirmaciones nuevas). Si necesitas una frase nueva de presentación, márcala con «Estoy suponiendo» en tu informe para que Ariel la apruebe.
- Lista de proyectos: datos en un archivo (p. ej. src/data/repos.ts) VACÍO de repos. La sección muestra un marcador claro y visible, p. ej. «[POR DECIDIR] Lista de repositorios pendiente de Ariel», con un comentario en el código que diga que Ariel decide qué repos se muestran y que no se publica con el marcador. El componente de tarjeta debe funcionar si luego se llenan datos (nombre, descripción, enlace al repo, lenguaje), pero no inventes ninguno.
- 404.astro (noindex). robots.txt (no bloquea, declara sitemap) y sitemap.xml (solo la portada).
- Imagen para compartir: si public/share/amr-compartir-1200x630.png de la referencia no dice nada específico de elari.work que confunda, cópiala; si no, detente y repórtalo. Favicon AMR copiado de la referencia.
- Foco visible, navegación por teclado, alt en imágenes, un H1 por página.
- Revisión a 320, 390 y 1440 px con `npm run preview` (o build servido localmente), sin desbordes; adjunta evidencia (capturas o lectura del navegador) en el informe. Apaga el servidor al terminar.
- Verifica: check, build, lista de archivos de dist/, `git diff --check`.

Etapa 3 — Workflow de GitHub Pages (etapa de riesgo: habrá auditoría)
- `.github/workflows/deploy.yml`: name «Deploy to GitHub Pages»; on push a main + workflow_dispatch; permissions top-level contents: read, pages: write, id-token: write; concurrency group "pages", cancel-in-progress: false.
- Job build (ubuntu-latest): actions/checkout@v7 → actions/setup-node@v7 con node-version 24 y cache npm → `npm ci` → actions/configure-pages@v6 (SIN `enablement`: activar Pages es decisión de Ariel) → `npm run build` → actions/upload-pages-artifact@v5 con path ./dist.
- Job deploy: needs build, environment name github-pages y url `${{ steps.deployment.outputs.page_url }}`, actions/deploy-pages@v5 con id deployment.
- Comentario breve al inicio del archivo: fusionar o hacer push a main publica en producción; requiere que Ariel haya elegido «GitHub Actions» en Settings → Pages.
- Verifica: `actionlint` (si no está instalado, dilo), YAML válido, `git diff --check`. No lo ejecutes en GitHub.

Etapa 4 — Documentación
- README: estado, cómo correr local, cómo se publica (Ariel activa Pages con fuente «GitHub Actions» ANTES de fusionar; si no, el primer run falla), cómo volver atrás (revert del merge en main vuelve a publicar la versión anterior; o re-ejecutar un run anterior), marcador de repos pendiente.
- AGENTS.md: Publicación actualizada (workflow existe; push/fusión a main publica; prohibido workflow_dispatch sin orden).
- DECISIONS.md: versión de Astro y de las acciones con sus fuentes; por qué workflow explícito (configure/upload/deploy) en lugar de withastro/action; Node 24 en CI.
- PROGRESS.md al día.
- Verifica: `git diff --check`, check y build.

Restricciones
- Commits locales por etapa solo en tarea/ghp-sitio-1. Nada de push hasta que el orquestador lo ordene al cierre.
- Nunca commitees .env, claves ni secretos.
- Ninguna acción destructiva sin que Ariel confirme el objetivo exacto.
- Sin refactors ni extras fuera del alcance; no sobreconstruyas (una página, una 404, pocos componentes).
- D:\Proyectos\portafolio-v2 es solo lectura.

Verificación
Rápidas, en cada etapa (trabajador): `npm run check`, `npm run build`, `actionlint` en la etapa 3, `git diff --check`, revisión visual en la etapa 2.
Lenta, una vez al cierre (orquestador): build limpio, `lychee` sobre dist/, gitleaks, npm audit, Lighthouse si está disponible, checklist web. Excepción: ninguna.

Cierre
Informa por etapa: resultado, archivos modificados, verificaciones con su salida real, problemas (separa preexistentes), suposiciones marcadas y siguiente paso. Si algo no pudo ejecutarse, di por qué.
```

## Terminados
- 2026-10-27 GHP-BASE-1 cierre — LESSONS.md (regla de deny `gh api * -X *`; `check-ignore` con patrones de directorio), push de `tarea/base-inicial` y PR 1 hacia `main`, fusionado por Ariel (adc2a84) · Ciclo: etapas aprobadas 4, auditoría hecha, rondas 0 · commit 62d3a9e · pendiente: nada
- 2026-10-27 GHP-BASE-1 etapa 4 (autorizada por Ariel) — remoto origin, `main` local con commit vacío «init» (f5e5e53), `tarea/base-inicial` con los commits de las etapas 1–3 copiados (67ba5ac, 84076ad, 4af10f3; diff vacío contra tarea/base-minima) · Ciclo: etapas aprobadas 3, auditoría hecha, rondas 1 · commit f6cf42d · pendiente: push de main (Ariel), push de la rama y PR
- 2026-10-27 GHP-BASE-1 etapa 3 (corrección de auditoría, autorizada por Ariel) — `gh api * -X *` sale de deny (no bloqueaba `-X` antes de la ruta, `--method` ni POST implícitos) y `gh api *` pasa a ask, en Bash y PowerShell · Ciclo: etapas aprobadas 2, auditoría hecha, rondas 1 · commit de esta etapa · pendiente: revisión del orquestador
- 2026-10-27 GHP-BASE-1 — base mínima local (PRD, README, AGENTS, CLAUDE, .gitignore, DECISIONS, PROGRESS y .claude/settings.json, autorizado por Ariel) en la rama tarea/base-minima · commits fafb12b, d6aa1a7 · pendiente: revisión del orquestador; repo remoto y Pages (Ariel); GHP-SITIO-1
