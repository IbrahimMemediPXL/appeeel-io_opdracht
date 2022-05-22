import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GithubService } from 'src/app/shared/github.service';
import { GithubProfile } from 'src/app/shared/Models/github-profile';
import { Router } from "@angular/router";

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
      <div class="flex flex-col">
        <form
          [formGroup]="profileForm"
          (ngSubmit)="onSubmit()"
          class="flex flex-row"
        >
          <input
            class="mr-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="search"
            type="text"
            placeholder="Github Username"
            formControlName="searchtext"
          />
          <button mat-mini-fab color="primary">
            <mat-icon>search</mat-icon>
          </button>
        </form>
      </div>
    </div>
  `,
})
export class SearchProfileComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.profileForm = new FormGroup({
      searchtext: new FormControl(''),
    });
  }

  onSubmit(): void {
    this.router.navigate(['profile/' + this.profileForm.value.searchtext]);
  }
}
