import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://api.github.com';
  }

  getProfileInfo(username: string): Observable<any> {
    return this.http.get<any>(this.url + `/users/${username}`);
  }

  getRublicRepos(username: string): Observable<any> {
    return this.http.get<any>(this.url + `/users/${username}/repos`);
  }

  getRepoCommits(username: string, repoName: string): Observable<any> {
    return this.http.get<any>(this.url + `/repos/${username}/${repoName}/commits`)
  }
}
