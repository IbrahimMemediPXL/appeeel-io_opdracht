import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myfooter',
  template: `
  <mat-card>
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <img src="../assets/GitHub-Mark-32px.png" alt="" />
          <span class="ml-2 text-lg">Github</span>
        </div>
        <div>
          Designed & Developed by Ibrahim Memedi
        </div>
      </div>
      <div class="flex justify-center">
        <a class="font-semibold hover:text-neutral-200" href="https://appeel.io/" target="_blank">Visit appeel.io</a>
      </div>
    </mat-card>
  `
})
export class MyfooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
