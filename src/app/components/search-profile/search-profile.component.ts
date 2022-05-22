import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-profile',
  template: `
    <div class="flex flex-col items-center align-middle">
      <div class="flex flex-col">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png"
          style="width: 500px;"
          alt=""
        />
        <h2 class="text-center">Find your Github Profile</h2>
      </div>
      <div class="flex flex-row">
        <input
          class="mr-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="search"
          type="text"
          placeholder="Github Username"
        />
        <button mat-mini-fab color="primary">
          <mat-icon>search</mat-icon>
        </button>
      </div>
    </div>
  `,
})
export class SearchProfileComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
