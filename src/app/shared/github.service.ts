import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  url: string;

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
    this.url = 'https://api.github.com';
  }

  getProfileInfo(username: string): Observable<any> {
    return this.http.get<any>(this.url + `/users/${username}`);
  }
}
