import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const routes = {
  users: () => '/users',
};

@Injectable({
  providedIn: 'root',
})
export class ChallengeListService {
  constructor(private httpClient: HttpClient) {}

  getGitUsers() {
    return this.httpClient.get(routes.users()).pipe(catchError(() => of('Error, could not load users')));
  }

  deleteUser(id: number) {
    return this.httpClient.delete(routes.users() + '/' + id).pipe(catchError(() => of('Error, could not delete user')));
  }
}
