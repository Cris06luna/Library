import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';

import { BookStore } from '../../../application/book.store';
import { BookCard } from '../../components/book-card/book-card';

/**
 * Displays the book catalogue and allows category selection.
 *
 * @remarks
 * Uses BookStore to manage the catalogue state with Angular Signals.
 *
 * @author Tu Nombre y Apellido
 */
@Component({
  selector: 'app-book-catalogue',
  imports: [
    BookCard,
    MatButtonModule,
    TranslatePipe
  ],
  templateUrl: './book-catalogue.html',
  styleUrl: './book-catalogue.css'
})
export class BookCatalogue {

  private bookStore = inject(BookStore);

  /** Signal containing the books displayed in the catalogue. */
  books = this.bookStore.books;

  /** Signal indicating whether the catalogue is loading. */
  loading = this.bookStore.loading;

  /** Currently selected book category. */
  selectedCategory = 'software engineering';

  constructor() {
    this.bookStore.loadBooks(this.selectedCategory);
  }

  /**
   * Changes the selected category and loads its books.
   *
   * @param category Category to search in Open Library.
   */
  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.bookStore.loadBooks(category);
  }
}
