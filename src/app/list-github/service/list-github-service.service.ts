import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const routes = {
  users: () => `/users`,
};

@Injectable({
  providedIn: 'root',
})
export class ListGithubServiceService {
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get(routes.users()).pipe(
      map((body: any) => body.value),
      catchError(() => of(`Error, could not load users`))
    );
  }
}
