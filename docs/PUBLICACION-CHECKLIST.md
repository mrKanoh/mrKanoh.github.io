# Lista de publicación — mrkanoh.github.io

Fecha: 2026-10-27. Orden: GHP-SITIO-1 (rama `tarea/ghp-sitio-1`). Plantilla: `D:\Proyectos\Creador\templates\checklist-web.md`.
Marcas: ✅ cumple · ⚠️ parcial · ❌ falta · — no aplica · ? no verificado.

## Resumen

- **Mínimos pendientes: 3** — #9, #10 y #42.
- **De Ariel (2):** #9 y #10 (Google Search Console, tras publicar).
- **Del equipo (1):** #42, recorrido en producción después de publicar.
- **Bloqueos de contenido** (fuera de la tabla, de Ariel; el sitio no se publica sin resolverlos):
  1. ~~Lista de repositorios~~ Resuelto el 2026-10-27: Ariel decidió mostrar solo `wcag-accessibility-audit-skill` (ver [DECISIONS](../DECISIONS.md)).
  2. ~~Aprobar los dos textos nuevos de la portada~~ Resuelto el 2026-10-27: Ariel escribió «Apruebo los dos textos de la portada tal como están.» Los textos son la frase «Aquí están mis proyectos de código en GitHub. Los casos UX/UI y el CV están en elari.work.» y la meta descripción «Proyectos de código de Ariel Mesina Ramírez, Full Stack Developer con foco en Frontend. Portafolio UX/UI y CV en elari.work.».
- **Antes de fusionar (Ariel):** cambiar Settings → Pages → Source de «Deploy from a branch» a «GitHub Actions» (ver [README](../README.md), «Cómo se publica»).

Evidencia `O`: resultados que corrió el orquestador sobre 8ff0695 el 2026-10-27:
- `npm run check`: 0 errores, 0 warnings, 0 hints.
- `npm run build` desde `dist` limpio: 2 páginas; `dist/index.html` con la tarjeta del repo y 0 «POR DECIDIR».
- `lychee` en línea con `--root-dir`: 38 OK y 1 error esperado (`https://mrkanoh.github.io/sitemap.xml` da 404 porque el sitio Astro aún no está publicado; `dist/sitemap.xml` existe).
- `gitleaks` sobre main..8ff0695: 7 commits, no leaks.
- `npm audit`: 0 vulnerabilities (sobre 817824d; sin cambios de dependencias desde entonces).
- `actionlint`: OK.

## 1. Dominio y publicación
| # | Control | Nivel | Quién | Marca | Evidencia |
|---|---|---|---|---|---|
| 1 | HTTPS en todo el sitio, con redirección desde http | Mínimo | T/A | ✅ | API de Pages (solo lectura, orquestador): `https_enforced: true` |
| 2 | Una sola versión del dominio y 301 de la otra | Mínimo | A | — | Dominio `mrkanoh.github.io`: sin www ni dominio propio |
| 3 | DNS sin registros viejos; correo intacto | Mínimo | A | — | Sin DNS propio (dominio de GitHub) |
| 4 | Página 404 propia, sin datos internos | Mínimo | T | ✅ | `src/pages/404.astro`; `/no-existe` responde 404 con esa página, `noindex` (revisión etapa 2) |
| 5 | Redirecciones 301 desde el sitio anterior | Mínimo | T | — | El sitio Jekyll actual solo sirve el README y documentos internos (`/PROGRESS.md`, `/AGENTS.md`, `/docs/PRD.md`); no hay URLs públicas que conservar |
| 6 | Cómo volver atrás, escrito antes de publicar | Mínimo | T | ✅ | [README](../README.md), «Cómo volver atrás» |

## 2. Google y SEO
| # | Control | Nivel | Quién | Marca | Evidencia |
|---|---|---|---|---|---|
| 7 | `robots.txt` no bloquea y declara el sitemap | Mínimo | T | ✅ | `dist/robots.txt`: `Allow: /` y `Sitemap: https://mrkanoh.github.io/sitemap.xml` |
| 8 | `sitemap.xml` con las páginas indexables | Mínimo | T | ✅ | `dist/sitemap.xml`: solo `https://mrkanoh.github.io/` |
| 9 | Propiedad verificada en Search Console | Mínimo | A | ❌ | Pendiente de Ariel |
| 10 | Sitemap enviado en Search Console | Mínimo | A | ❌ | Pendiente de Ariel (después de #9 y de publicar) |
| 11 | Sin `noindex` accidental | Mínimo | T | ✅ | `noindex` solo en la 404; la portada lleva canónica |
| 12 | Título único y descripción ≤160 por página | Mínimo | T | ✅ | Portada: título «Ariel Mesina Ramírez \| Full Stack Developer con foco en Frontend», descripción de 124 caracteres; 404: «Página no encontrada \| AMR» |
| 13 | Un H1 por página y jerarquía ordenada | Recomendado | T | ✅ | Revisión etapa 2: 1 H1 en portada y en 404; portada H1 → H2 «Repositorios» → H3 en tarjetas |
| 14 | URL canónica por página | Recomendado | T | ✅ | Portada: `<link rel="canonical" href="https://mrkanoh.github.io/">`; la 404 no lleva (noindex) |
| 15 | Open Graph y tarjeta social con imagen | Recomendado | T | ✅ | `og:*` y `twitter:card summary_large_image` con `share/amr-compartir-1200x630.png` (1200×630) |
| 16 | JSON-LD válido, si aplica | Opcional | T | ⚠️ | WebSite + Person emitidos en la portada; no se pasó por un validador de schema.org |

## 3. Medición
| # | Control | Nivel | Quién | Marca | Evidencia |
|---|---|---|---|---|---|
| 17 | Decidir si el sitio mide visitas y con qué | Mínimo | A | ✅ | Decidido: sin medición por ahora. Ariel, 2026-10-27: «El sitio no mide visitas por ahora.» (ver [DECISIONS](../DECISIONS.md)) |
| 18–23 | GA4, etiqueta, eventos, Realtime, tráfico interno, otros píxeles | Rec./Opc. | A/T | — | Sin medición (#17) |

## 4. Privacidad
| # | Control | Nivel | Quién | Marca | Evidencia |
|---|---|---|---|---|---|
| 24 | Consentimiento si hay medición o cookies | Mínimo si hay medición | T/A | — | Sin medición ni cookies |
| 25 | Política de privacidad si recoge datos | Mínimo si recoge datos | A/T | — | No recoge datos (sin formularios ni medición) |

## 5. Rendimiento
| # | Control | Nivel | Quién | Marca | Evidencia |
|---|---|---|---|---|---|
| 26 | PageSpeed o Lighthouse móvil y escritorio | Recomendado | O | ? | Lighthouse no disponible; no se corrió |
| 27 | Core Web Vitals sin problemas graves | Recomendado | T/O | ? | No medido (sin Lighthouse ni sitio publicado) |
| 28 | Imágenes eficientes; fuentes livianas | Recomendado | T | ✅ | Sin imágenes en el contenido; fuentes Inter 400/500 e IBM Plex Mono 400, solo subconjunto latin en woff2/woff |
| 29 | Scripts de terceros medidos | Recomendado | T | ✅ | Sin scripts de terceros (solo JSON-LD en línea) |

## 6. Experiencia y accesibilidad
| # | Control | Nivel | Quién | Marca | Evidencia |
|---|---|---|---|---|---|
| 30 | Revisado a 320, 390 y 1440 px | Mínimo | T | ✅ | Revisión etapa 2 con `npm run preview`: `scrollWidth` = ancho de ventana y 0 elementos desbordados en los tres anchos; capturas a 320 y 390 px |
| 31 | Contraste, foco, teclado y alt | Mínimo | T | ✅ | Auditoría de cierre: muted 5,56:1, naranja 4,95:1, azul 5,71:1, carbón 12,98:1; flecha en hover corregida en la etapa 5; foco visible de 2 px #1d4ed8; enlace «Saltar al contenido»; 0 imágenes sin `alt` |
| 32 | Navegadores acordados probados | Recomendado | O | ? | No se corrieron navegadores aparte del panel de revisión |

## 7. Formularios y contacto
| # | Control | Nivel | Quién | Marca | Evidencia |
|---|---|---|---|---|---|
| 33 | Formulario probado de punta a punta | Mínimo | T | — | Sin formularios |
| 34 | El correo del envío llega | Mínimo | A | — | Sin formularios |
| 35 | Enlaces de WhatsApp, teléfono y correo | Mínimo | T | — | Sin esos enlaces (el correo de contacto está por decidir) |
| 36 | Sin textos de prueba ni enlaces rotos | Mínimo | T/O | ✅ | `lychee` en línea con `--root-dir` (sobre 8ff0695): 38 OK y 1 error esperado, `https://mrkanoh.github.io/sitemap.xml` 404 porque el sitio Astro aún no está publicado (`dist/sitemap.xml` existe). Sin el marcador «[POR DECIDIR]» (0 en `dist/index.html`) |
| 37 | Protección contra spam | Recomendado | T | — | Sin formularios |
| 38 | SPF, DKIM y DMARC | Recomendado | A | — | El dominio no envía correo |

## 8. Seguridad
| # | Control | Nivel | Quién | Marca | Evidencia |
|---|---|---|---|---|---|
| 39 | Sin secretos (`gitleaks`) | Mínimo | T | ✅ | `gitleaks` sobre main..8ff0695: 7 commits, no leaks; además `--staged` antes de cada commit |
| 40 | Dependencias sin vulnerabilidades altas | Recomendado | T | ✅ | `npm audit`: 0 vulnerabilities |
| 41 | Cabeceras de seguridad HTTP | Recomendado | T | — | GitHub Pages no permite cabeceras propias |

## 9. Después de publicar
| # | Control | Nivel | Quién | Marca | Evidencia |
|---|---|---|---|---|---|
| 42 | Recorrido en producción de lo crítico | Mínimo | T | ❌ | Pendiente tras publicar: portada, 404, robots.txt, sitemap.xml e imagen para compartir |
| 43 | Aviso si el sitio se cae | Recomendado | A | ❌ | Recomendado, de Ariel |
| 44 | Alertas de vencimiento de dominio y certificado | Recomendado | A | ❌ | Recomendado, de Ariel (el dominio y el certificado los gestiona GitHub) |
| 45 | Accesos del dueño a todas las cuentas | Recomendado | A | ❌ | Recomendado, de Ariel |
| 46 | Conformidad del cliente | Mínimo para terceros | A | — | Sitio propio, no de un tercero |
