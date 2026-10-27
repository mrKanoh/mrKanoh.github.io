# PRD — mrkanoh.github.io

Fecha: 2026-10-27. Estado: aprobado por Ariel en concepto, dirección y stack (ver [DECISIONS.md](../DECISIONS.md)).

## Objetivo

Portada de la cuenta GitHub de Ariel Mesina Ramírez (`mrKanoh`) que muestra sus proyectos de código con la identidad visual AMR (la de https://elari.work) y lleva a elari.work para los casos UX/UI.

## Usuarios

- Reclutadores y equipos técnicos que llegan desde GitHub.
- Desarrolladores que revisan su código.

## Incluye

- Una página en español.
- Presentación breve.
- Lista de repos/proyectos de código, con enlace a cada repo.
- Enlaces a elari.work, al CV y a GitHub.
- Página 404 propia.
- SEO básico (título, descripción, canónica, imagen para compartir, sitemap y robots).

## No incluye

- Repetir los casos de elari.work (evita contenido duplicado; se enlazan).
- Backend.
- Formularios.
- Medición (por decidir).
- Dominio propio.

## Criterio de éxito

- https://mrkanoh.github.io carga por HTTPS, publicado desde el workflow de GitHub Actions.
- Cada enlace funciona: `lychee` sin enlaces rotos.
- `npm run check` y `npm run build` sin errores.
- Contraste AA con los tokens AMR (marfil `#f1ece8`, carbón `#242625`, texto naranja `#b9370a`, texto azul `#1d4ed8`).

## Riesgos

- **Pocos repos públicos.** La cuenta `mrKanoh` tiene hoy 1 repositorio público (consulta del orquestador con `gh api users/mrKanoh`, 2026-10-27). Un escaparate de código con un solo repo se ve pobre; depende de la decisión sobre qué repos publicar. Nota al 2026-10-27: la cuenta tiene 2 repos públicos (`mrKanoh.github.io` y `wcag-accessibility-audit-skill`), y Ariel decidió mostrar solo el segundo (ver [DECISIONS.md](../DECISIONS.md)).
- **Repo público obligatorio.** Con GitHub Free, el repo de sitio de usuario debe ser público; el sitio es público aunque el repo sea privado.
- **Herencia del dominio.** Si en el futuro se asigna un dominio propio al sitio de usuario, los sitios de proyecto de la cuenta lo heredan por defecto.

## Por decidir (de Ariel)

- Qué repos se muestran y si se publican más repos.
- Medición: sí o no (y cuál).
- Dominio propio: sí o no, y su efecto de herencia sobre los sitios de proyecto.
- Correo de contacto `hola@elari.work` (se resuelve al final).
- Versión en inglés: sí o no.
