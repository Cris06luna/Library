import { Injectable, signal } from '@angular/core';

import { Book } from '../domain/model/book';
import { BookApi } from '../infrastructure/api/book-api';
import { BookAssembler } from '../infrastructure/assemblers/book.assembler';

/**
 * Manages the application state for books.
 *
 * @remarks
 * Uses Angular Signals to store and expose the current book catalogue.
 *
 * @author Tu Nombre y Apellido
 */
@Injectable({
  providedIn: 'root'
})
export class BookStore {

  private booksSignal = signal<Book[]>([]);
  private loadingSignal = signal<boolean>(false);

  /** Read-only signal containing the current books. */
  readonly books = this.booksSignal.asReadonly();

  /** Read-only signal indicating whether books are being loaded. */
  readonly loading = this.loadingSignal.asReadonly();

  constructor(private bookApi: BookApi) {}

  /**
   * Loads books from the Open Library API for the selected category.
   *
   * @param category Search category used to retrieve books.
   */
  loadBooks(category: string): void {
    this.loadingSignal.set(true);

    this.bookApi.getBooks(category).subscribe({
      next: response => {
        const books = response.docs.map(
          resource => BookAssembler.toEntity(resource)
        );

        this.booksSignal.set(books);
        this.loadingSignal.set(false);
      },
      error: () => {
        this.booksSignal.set([]);
        this.loadingSignal.set(false);
      }
    });
  }
}
