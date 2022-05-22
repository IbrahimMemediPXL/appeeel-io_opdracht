import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <mat-card>
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <a href="/">
            <img src="../assets/GitHub-Mark-32px.png" alt="Logo"/>
          </a>
          <span class="ml-2 text-lg">Github</span>
        </div>
        <div>
          Appeel.io assessment
        </div>
      </div>
    </mat-card>
  `,
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
