/**
 * Represents a book in the application domain.
 *
 * @remarks
 * Defines the application-specific representation of a book,
 * independent of the naming conventions used by the Open Library API.
 *
 * @author Tu Nombre y Apellido
 */
export interface Book {
  key: string;
  title: string;
  authors: string[];
  firstPublishYear: number;
  editionCount: number;
  coverId: number;
}
