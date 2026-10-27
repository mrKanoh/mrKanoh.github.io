export interface Repo {
  /** Nombre del repositorio tal como aparece en GitHub. */
  name: string;
  description: string;
  /** Dirección pública del repositorio. */
  url: string;
  /** Lenguaje principal, opcional. */
  language?: string;
}

/**
 * La lista la decide Ariel (2026-10-27: solo este repo). No agregar repositorios sin su decisión.
 * Si la lista queda vacía, la portada muestra el marcador «[POR DECIDIR]» y no se publica así.
 */
export const repos: Repo[] = [
  {
    name: 'wcag-accessibility-audit-skill',
    description:
      'Skill de Claude Code para revisiones de accesibilidad WCAG 2.1/2.2, guía de corrección, patrones ARIA y planificación de pruebas manuales. Inglés y español.',
    url: 'https://github.com/mrKanoh/wcag-accessibility-audit-skill',
    language: 'Python',
  },
];
