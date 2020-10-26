import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

const routes = {
  users: () => `/users`,
};

@Injectable({
  providedIn: 'root',
})
export class UserCrudService {
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get(routes.users()).pipe(catchError(() => of('Error, could not load users :-(')));
  }
}
