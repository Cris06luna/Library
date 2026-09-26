import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BookSearchResponse } from '../responses/book-search.response';
import { environment } from '../../../../environments/environment';

/**
 * Provides access to the Open Library search API.
 *
 * @remarks
 * Handles HTTP requests for retrieving books by category.
 *
 * @author Tu Nombre y Apellido
 */
@Injectable({
  providedIn: 'root'
})
export class BookApi {

  private http = inject(HttpClient);

  /**
   * Retrieves books from Open Library using the specified category.
   *
   * @param category - Search category used to query the Open Library API.
   * @returns An observable containing the search response.
   */
  getBooks(category: string): Observable<BookSearchResponse> {
    const url = `${environment.apiUrl}${environment.searchPath}`;

    return this.http.get<BookSearchResponse>(url, {
      params: {
        q: category,
        fields: 'key,title,author_name,first_publish_year,edition_count,cover_i',
        limit: 12
      }
    });
  }
}
