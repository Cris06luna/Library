import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { BookCatalogue } from '../../../../book-assets/presentation/views/book-catalogue/book-catalogue';
import { Toolbar } from '../../components/toolbar/toolbar';

/**
 * Main application view containing the toolbar, catalogue and footer.
 *
 * @author Tu Nombre y Apellido
 */
@Component({
  selector: 'app-home',
  imports: [
    Toolbar,
    BookCatalogue,
    TranslatePipe
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
}
