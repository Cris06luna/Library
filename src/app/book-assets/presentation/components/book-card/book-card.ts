import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';

import { Book } from '../../../domain/model/book';
import { environment } from '../../../../../environments/environment';

/**
 * Displays the information of a book in a Material card.
 *
 * @remarks
 * Builds the cover and official Open Library URLs from environment values.
 *
 * @author Tu Nombre y Apellido
 */
@Component({
  selector: 'app-book-card',
  imports: [
    MatCardModule,
    MatButtonModule,
    TranslatePipe
  ],
  templateUrl: './book-card.html',
  styleUrl: './book-card.css'
})
export class BookCard {

  /** Book entity displayed by the component. */
  book = input.required<Book>();

  /**
   * Returns the Open Library cover URL for the current book.
   */
  get coverUrl(): string {
    return `${environment.coversUrl}/b/id/${this.book().coverId}-L.jpg`;
  }

  /**
   * Returns the official Open Library record URL for the current book.
   */
  get bookUrl(): string {
    return `${environment.apiUrl}${this.book().key}`;
  }
}
