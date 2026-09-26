import { Component } from '@angular/core';
import { Home } from './shared/presentation/views/home/home';

@Component({
  selector: 'app-root',
  imports: [Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
