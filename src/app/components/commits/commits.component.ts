import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { GithubService } from 'src/app/shared/github.service';

@Component({
  selector: 'app-commits',
  template: `
  <ng-container *ngIf="commits">
    <div>
      <mat-card-title class="ml-2">Last 20 commits</mat-card-title>
      <div class="mt-10" style="max-height: 69vh; overflow:scroll">
        <mat-card *ngFor="let commit of commits" class="m-2">
          <p>{{commit.commit.message}}</p>
          <div class="flex justify-between w-1/6">
            <ng-container *ngIf="commit.author">
              <img [src]="commit.author.avatar_url" alt="" width="30px">
            </ng-container>
            <ng-container *ngIf="commit.committer == null">
              <img src="../assets/GitHub-Mark-32px.png" alt="" width="30px">
            </ng-container>
            <span class="items-center align-middle m-0 p-0 self-center">{{commit.commit.author.name}}</span>
            <span class="items-center align-middle m-0 p-0 self-center">{{commit.commit.committer.date | date}}</span>
          </div>
        </mat-card>
        <mat-card *ngFor="let commit of commits" class="m-2">
          <p>{{commit.commit.message}}</p>
          <div class="flex justify-between w-1/6">
            <ng-container *ngIf="commit.author">
              <img [src]="commit.author.avatar_url" alt="" width="30px">
            </ng-container>
            <ng-container *ngIf="commit.committer == null">
              <img src="../assets/GitHub-Mark-32px.png" alt="" width="30px">
            </ng-container>
            <span class="items-center align-middle m-0 p-0 self-center">{{commit.commit.author.name}}</span>
            <span class="items-center align-middle m-0 p-0 self-center">{{commit.commit.committer.date | date}}</span>
          </div>
        </mat-card>
      </div>
    </div>
  </ng-container>
  `
})
export class CommitsComponent implements OnInit {

  paramMap$: Subscription | undefined;
  repoName!: string;
  username!: string;
  commits!: any[];

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.paramMap$ = this.route.paramMap.subscribe((params: ParamMap) => {
      this.username = params.get('searchText') || '';
      this.repoName = params.get('repoName') || '';
      
      this.githubService.getRepoCommits(this.username, this.repoName).subscribe(
        (value) => {
          this.commits = value;
          console.log(value);
        },
        (error) => {
          this._snackBar.open('Error occured during retrieving commits', '', { duration: 2000 });
        }
      )
    });
  }

// Message
// Photo
// Username
// Date

}
