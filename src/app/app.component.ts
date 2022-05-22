import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-navbar></app-navbar>
  <main><router-outlet></router-outlet></main>
  <footer>

  </footer>
  `
})
export class AppComponent {
  title = 'Appeel.io assessment';
}
