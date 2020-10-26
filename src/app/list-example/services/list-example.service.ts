import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { catchError, map } from 'rxjs/operators';

const routes = {
  users: () => `/users`,
};

@Injectable({
  providedIn: 'root', // Tree-Shakeable provider
})
export class ListExampleService {
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient
      .get(routes.users())
      .pipe(catchError(() => of('Error, não foi possível carregar os logins :-(')));
  }
}
