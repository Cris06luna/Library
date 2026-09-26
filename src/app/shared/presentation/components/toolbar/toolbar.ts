import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-toolbar',
  imports: [
    MatToolbarModule,
    TranslatePipe
  ],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css'
})
export class Toolbar {

  private translate = inject(TranslateService);

  logoUrl = `${environment.logoProviderApiBaseUrl}openlibrary.org?token=${environment.logoProviderPublishableKey}&format=webp&retina=true`;

  changeLanguage(language: string): void {
    this.translate.use(language);
  }

}
