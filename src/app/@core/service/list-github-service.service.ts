import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const routes = {
  users: () => `/users/`,
  removeUser: (id: number) => `/users/${id}`,
};

@Injectable({
  providedIn: 'root',
})
export class ListGithubService {
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get(routes.users()).pipe(catchError(() => of(`Error, could not load users`)));
  }
  removeUser(id: number) {
    return this.httpClient.delete(routes.removeUser(id)).pipe(catchError(() => of(`Error, could not remove user`)));
  }
  createUser(avatarUrl: string, userLogin: string, userType: string) {
    return this.httpClient
      .post(routes.users(), {
        avatar_url: avatarUrl,
        login: userLogin,
        type: userType,
      })
      .pipe(catchError(() => of(`Error, could not remove user`)));
  }
}
