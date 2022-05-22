import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-navbar></app-navbar>
  <main><router-outlet></router-outlet></main>
  <app-myfooter></app-myfooter>
  `
})
export class AppComponent {
  title = 'Appeel.io assessment';
}
