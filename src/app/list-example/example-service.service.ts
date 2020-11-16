import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const routes = {
  users: () => `/users`,
};

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get(routes.users()).pipe(catchError(() => of('Error, could not load users')));
  }
}
