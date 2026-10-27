# Progreso

## Trabajo actual: GHP-BASE-1 base mínima  (rama tarea/base-minima)
- Etapas: [x] 1 repositorio y documentos (commit de esta etapa) · [ ] 2 permisos (.claude/settings.json; requiere autorización de Ariel)
- Ciclo: sin dato
- Línea base de pruebas: no hay pruebas; verificación manual.
- Pendiente / bloqueos:
  - Crear el repo `mrKanoh/mrKanoh.github.io` en GitHub y activar Pages con fuente «GitHub Actions»: Ariel.
  - GHP-SITIO-1: Astro + workflow de GitHub Pages.
  - `main` sin commits a propósito: la base de `main` se resuelve cuando Ariel cree el repo remoto.

### Orden completa

```
Proyecto: mrKanoh.github.io — D:\Proyectos\mrKanoh.github.io (carpeta nueva; créala tú)
Id: GHP-BASE-1
Tamaño: grande — toca permisos (.claude/settings.json); ante la duda, el mayor
Etiqueta antes-de-*: no (repositorio nuevo, no hay estado previo que marcar)
Tipo de solicitud: implementación (proyecto nuevo)
Autorizado: crear la carpeta, `git init -b main` local, crear la rama `tarea/base-minima`, crear y editar los archivos del alcance, verificar y hacer un commit local por etapa en esa rama.
No autorizado: crear el repositorio en GitHub, agregar remoto, push, activar Pages, DNS o dominio, commits en main, fusionar, escribir código del sitio (Astro) o workflows, tocar D:\Proyectos\portafolio-v2 (solo lectura como referencia).

Objetivo
Dejar en D:\Proyectos\mrKanoh.github.io un repositorio Git local con la base mínima del perfil S (sitio estático) y el PRD aprobado por Ariel, listo para que la siguiente orden monte Astro y el workflow de GitHub Pages.

Contexto
- Referencia de concepto y diseño (SOLO LECTURA): D:\Proyectos\portafolio-v2\tmp\release-repository (Astro; tokens en src/styles/tokens.css: marfil #f1ece8, carbón #242625, naranja #d9430e / texto #b9370a, ventana azul #2563eb / texto #1d4ed8; Inter en títulos, 42dot Sans en navegación, Instrument Serif en énfasis; estética de computador retro y disquetes).
- Decisiones de Ariel (2026-10-27): concepto = escaparate de código; dirección = sitio de usuario https://mrkanoh.github.io (repo `mrKanoh.github.io`); tecnología = Astro + GitHub Actions.
- Documentación oficial verificada por el orquestador el 2026-10-27:
  · Creación: https://docs.github.com/es/pages/getting-started-with-github-pages/creating-a-github-pages-site — el repo de sitio de usuario debe llamarse `<user>.github.io`; con GitHub Free debe ser público; el sitio es público aunque el repo sea privado; publicar puede tardar hasta 10 minutos.
  · Fuente de publicación: https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site — con un generador distinto de Jekyll se recomienda GitHub Actions; entorno `github-pages`.
  · Flujos personalizados: https://docs.github.com/es/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages — permisos `pages: write` e `id-token: write` (el ejemplo agrega `contents: read`); acciones `actions/configure-pages＠v5`, `actions/upload-pages-artifact＠v4`, `actions/deploy-pages＠v4`.
  · Dominios: https://docs.github.com/es/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages y .../managing-a-custom-domain-for-your-github-pages-site — un dominio propio en el sitio de usuario lo heredan por defecto los sitios de proyecto de la cuenta; con Actions no se crea archivo CNAME y uno existente se ignora; se recomienda verificar el dominio antes; Enforce HTTPS puede tardar hasta 24 h.
- Versiones vistas el 2026-10-27: astro 7.4.2 en npm; Node local 24.4.1, npm 11.4.2.
- La cuenta mrKanoh tiene hoy 1 repositorio público (gh api users/mrKanoh). Un escaparate de código con 1 repo público es pobre: déjalo como riesgo en el PRD.

Alcance
- Incluye:
  1. `docs/PRD.md` (una página): objetivo, usuarios, incluye / no incluye, criterio de éxito y «Por decidir». Contenido mínimo:
     · Objetivo: portada de la cuenta GitHub de Ariel que muestra sus proyectos de código con la identidad visual AMR y lleva a elari.work para los casos UX/UI.
     · Usuarios: reclutadores y equipos técnicos que llegan desde GitHub; desarrolladores que revisan su código.
     · Incluye: una página en español, presentación breve, lista de repos/proyectos de código con enlace a cada repo, enlaces a elari.work, CV y GitHub; 404 propia; SEO básico.
     · No incluye: repetir los casos de elari.work (evita contenido duplicado), backend, formularios, medición (por decidir), dominio propio.
     · Criterio de éxito: https://mrkanoh.github.io carga por HTTPS desde el workflow de Actions, cada enlace funciona (lychee sin rotos), check y build sin errores, contraste AA con los tokens AMR.
     · Por decidir (de Ariel): qué repos se muestran y si se publican más repos; medición sí/no; dominio propio (y su efecto de herencia sobre sitios de proyecto); correo de contacto hola＠elari.work (se resuelve al final); inglés sí/no.
  2. `README.md`: qué es, dirección prevista, stack decidido, estado (aún sin código ni repo remoto), cómo se publicará (Actions, fuente «GitHub Actions» en Settings → Pages, lo activa Ariel).
  3. `AGENTS.md` mínimo: ruta real del repo, remoto previsto `https://github.com/mrKanoh/mrKanoh.github.io` (aún no existe), rama principal `main`; verificación (por ahora `git diff --check`; los comandos de Astro se agregan en la siguiente orden); qué publica (cuando exista: push/fusión a `main` dispara el workflow y publica en producción; requiere autorización de Ariel); qué no tocar (main, `.github/workflows/` sin orden, `.claude/settings*.json`, el repo de elari.work).
  4. `CLAUDE.md` con `＠AGENTS.md`.
  5. `.gitignore`: `node_modules/`, `dist/`, `.astro/`, `.env`, `.env.*` (con `!.env.example`), logs de npm, `.DS_Store`, `Thumbs.db`, `.claude/settings.local.json`.
  6. `.claude/settings.json` desde `D:\Proyectos\Creador\templates\permisos-proyecto.json` (sin la clave `_uso`), agregando en allow `npm run check`, `npm run build`, `npm run preview` (Bash y PowerShell) y en deny `gh repo create *`, `gh api * -X *` y `gh workflow run *`. Necesitas la autorización de Ariel en tu chat para editar este archivo; si no está, deja la etapa 2 detenida y avisa.
  7. `DECISIONS.md` con fecha 2026-10-27: concepto, dirección y stack decididos por Ariel, con motivo (mismo stack que elari.work para reutilizar tokens; Actions porque Astro no es Jekyll, según la doc citada); y la decisión de no usar elari.work como dominio de este sitio salvo orden de Ariel.
  8. `PROGRESS.md`: trabajo actual GHP-BASE-1, línea base de pruebas = «no hay pruebas; verificación manual», terminados, pendientes (crear repo en GitHub y activar Pages: Ariel; GHP-SITIO-1: Astro + workflow).
- No incluye: package.json, código Astro, workflow, LESSONS.md, docs/DIAGNOSTICO.md.

Antes de empezar (preflight)
1. Lee AGENTS.md y README.md de la referencia solo para el concepto; no edites nada ahí.
2. Confirma que D:\Proyectos\mrKanoh.github.io no existe; si existe, DETENTE e informa sin tocarla.
3. Resume objetivo, estado, restricciones y siguiente paso.

Tarea
Etapa 1 — Repositorio y documentos: crea la carpeta, `git init -b main`, `git switch -c tarea/base-minima` (main queda sin commits a propósito: Estoy suponiendo que la base de main se resuelve cuando Ariel cree el repo remoto). Crea los ítems 1, 2, 3, 4, 5, 7 y 8. Verifica y commit local. DETENTE e informa.
Etapa 2 — Permisos: ítem 6 (requiere la frase de autorización de Ariel en tu chat). Verifica que es JSON válido (`node -e "JSON.parse(require('fs').readFileSync('.claude/settings.json','utf8'))"`), actualiza PROGRESS.md, commit local. DETENTE e informa.

Restricciones
- Nunca commitees `.env`, claves ni secretos.
- Nada de push, remoto, gh repo create ni cambios en cuentas.
- Español neutro con «tú». Sin inventar datos de Ariel (repos, cargos, cifras): lo que no esté en la referencia va a «Por decidir».

Verificación
Rápidas, en cada etapa: `git diff --check` (o `git diff --cached --check` antes del commit), `git status --short --branch`, revisar que `git check-ignore .env node_modules dist` los ignore, JSON válido en la etapa 2.
Lenta al cierre: no hay (sin código).

Cierre
Informa: resultado, archivos creados, verificaciones con su salida real, problemas y siguiente paso.
```

## Terminados
- (ninguno)
