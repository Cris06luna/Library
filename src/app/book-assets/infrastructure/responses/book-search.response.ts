import { BookResource } from '../resources/book.resource';

/**
 * Represents the response returned by the Open Library search endpoint.
 *
 * @remarks
 * Contains the total number of matching books and the collection of
 * book resources returned by the API.
 *
 * @author Tu Nombre y Apellido
 */
export interface BookSearchResponse {
  numFound: number;
  docs: BookResource[];
}
