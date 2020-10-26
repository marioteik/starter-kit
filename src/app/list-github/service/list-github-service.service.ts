import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const routes = {
  getUsers: () => `/users`,
  removeUser: (id: number) => `/users/${id}`,
};

@Injectable({
  providedIn: 'root',
})
export class ListGithubService {
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get(routes.getUsers()).pipe(catchError(() => of(`Error, could not load users`)));
  }
  removeUser(id: number) {
    return this.httpClient.delete(routes.removeUser(id)).pipe(catchError(() => of(`Error, could not remove user`)));
  }
}
