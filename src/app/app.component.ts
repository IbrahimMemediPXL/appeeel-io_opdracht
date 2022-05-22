import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <header><app-navbar></app-navbar></header>
  
  <main class="mt-2 mb-2">
    <mat-card style="min-height: 82vh;">
      <router-outlet></router-outlet>
    </mat-card>
  </main>

  <footer class=""><app-myfooter></app-myfooter></footer>
  `
})
export class AppComponent {
  title = 'Appeel.io Assessment';
}
