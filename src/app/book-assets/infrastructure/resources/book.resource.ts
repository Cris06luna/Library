
/**
 * Represents a book resource returned by the Open Library API.
 *
 * @remarks
 * Uses the property names provided by the external API.
 *
 * @author Tu Nombre y Apellido
 */
export interface BookResource {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  edition_count?: number;
  cover_i?: number;
}
