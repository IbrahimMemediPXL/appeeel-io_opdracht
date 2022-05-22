import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { GithubService } from 'src/app/shared/github.service';
import { GithubProfile } from 'src/app/shared/Models/github-profile';

@Component({
  selector: 'app-user-details',
  template: `
    <div class="flex flex-col justify-center items-center">
      <div>
        <img style="width: 100px;" [src]="githubProfile.avatarUrl" />
      </div>
      <div>
        <h2 class="text-center">{{ githubProfile.name }}</h2>
        <h4 class="text-center">{{ githubProfile.bio }}</h4>
      </div>
      <div style="min-width: 350px;" class="flex justify-between">
        <mat-card style="min-width: 100px;" class="text-center">
          <h5>Followers:</h5>
          <p class="text-xl">{{githubProfile.followers}}</p>
          <mat-card-footer><mat-progress-bar mode="indeterminate"></mat-progress-bar></mat-card-footer>
        </mat-card>
        <mat-card style="min-width: 100px;" class="text-center">
          <h5>Following:</h5>
          <p class="text-xl">{{githubProfile.following}}</p>
          <mat-card-footer><mat-progress-bar mode="indeterminate"></mat-progress-bar></mat-card-footer>
        </mat-card>
        <mat-card style="min-width: 100px;" class="text-center">
          <h5>Repositories:</h5>
          <p class="text-xl">{{githubProfile.countPublicRepos}}</p>
          <mat-card-footer><mat-progress-bar mode="indeterminate"></mat-progress-bar></mat-card-footer>
        </mat-card>
      </div>

      <div class="mt-12 w-5/6 flex flex-wrap justify-start bg-gray-50">
        <a [routerLink]="repo.name + '/commits'" style="width: calc(25% - 8px);" class="hover:bg-gray-400" *ngFor="let repo of repos">
          <mat-card class="text-center m-1">
            <h4 class="overflow-hidden">{{repo.name}}</h4>
            <h6 class="absolute right-0 bottom-0 px-2 bg-gray-400">{{repo.pushed_at | date}}</h6>
          </mat-card>
        </a>
      </div>
    </div>
  `,
})
export class UserDetailsComponent implements OnInit {
  paramMap$: Subscription | undefined;
  searchText!: string;
  githubProfile!: GithubProfile;
  repos!: any[];

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.paramMap$ = this.route.paramMap.subscribe((params: ParamMap) => {
      this.searchText = params.get('searchText') || '';

      this.githubService.getProfileInfo(this.searchText).subscribe(
        (value) => {
          this.githubProfile = new GithubProfile(value);
        },
        (error) => {
          this._snackBar.open('User not found', '', { duration: 2000 });
        }
      );

      this.githubService.getRublicRepos(this.searchText).subscribe(
        (value) => {
          this.repos = value;
          console.log(this.repos)
        },
        (error) => {
          this._snackBar.open('Error occured during retrieving repos', '', { duration: 2000 });
        }
      )
    });
  }
}
