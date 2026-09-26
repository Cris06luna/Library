import { Book } from '../../domain/model/book';
import { BookResource } from '../resources/book.resource';

/**
 * Converts Open Library resources into application domain entities.
 *
 * @remarks
 * Keeps the external API naming conventions isolated from the domain model.
 *
 * @author Tu Nombre y Apellido
 */
export class BookAssembler {

  /**
   * Converts a BookResource into a Book domain entity.
   *
   * @param resource - Book resource returned by the Open Library API.
   * @returns The corresponding Book domain entity.
   */
  static toEntity(resource: BookResource): Book {
    return {
      key: resource.key,
      title: resource.title,
      authors: resource.author_name ?? [],
      firstPublishYear: resource.first_publish_year ?? 0,
      editionCount: resource.edition_count ?? 0,
      coverId: resource.cover_i ?? 0
    };
  }

}
