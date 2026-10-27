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
 * [POR DECIDIR] Ariel decide qué repositorios se muestran. Mientras la lista esté vacía,
 * la portada muestra el marcador «[POR DECIDIR]», y el sitio NO se publica con ese marcador.
 * No agregar repositorios sin su decisión.
 */
export const repos: Repo[] = [];
