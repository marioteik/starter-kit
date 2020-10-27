import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError, Observable, of } from 'rxjs';
import { User } from './user-data';

const routes = {
  users: () => `/users`,
};

@Injectable({
  providedIn: 'root',
})
export class UserCrudService {
  apiurl = 'api/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers,
  };

  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get(routes.users()).pipe(catchError(() => of('Error, could not load users :-(')));
  }

  getUser(id: number): Observable<User> {
    const url = `${this.apiurl}/${id}`;
    return this.httpClient
      .get<any>(routes.users(), this.httpOptions)
      .pipe(catchError(() => of('Error, could not load users :-(')));
  }

  addUser(user: User): Observable<string | User> {
    user.id = null;
    return this.httpClient.post<User>(this.apiurl, user, this.httpOptions).pipe(
      tap((data) => console.log(data)),
      catchError(() => of('Error, could not load users :-('))
    );
  }

  updateUser(user: User): Observable<string | User> {
    const url = `${routes.users()}/${user.id}`;
    console.log(url);
    return this.httpClient.patch<User>(url, user, this.httpOptions).pipe(
      map(() => user),
      catchError(() => of('Error, could not load users :-('))
    );
  }

  deleteUser(id: number): Observable<User> {
    const url = `${routes.users()}/${id}`;
    return this.httpClient
      .delete<any>(url, this.httpOptions)
      .pipe(catchError(() => of('Error, could not delete user :-(')));
  }
}
