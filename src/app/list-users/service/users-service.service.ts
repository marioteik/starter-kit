import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@app/user/user';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersUrl: 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json'),
  };

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.usersUrl).pipe(retry(1), catchError(this.showError));
  }

  createUser(user: User): Observable<User> {
    return this.httpClient
      .post<User>(this.usersUrl + '/' + user.id, JSON.stringify(user), this.httpOptions)
      .pipe(retry(1), catchError(this.showError));
  }

  updateUser(user: User) {
    return this.httpClient
      .put<User>(this.usersUrl + '/' + user.id, JSON.stringify(user), this.httpOptions)
      .pipe(retry(1), catchError(this.showError));
  }

  deleteUser(user: User) {
    return this.httpClient
      .delete<User>(this.usersUrl + '/' + user.id, this.httpOptions)
      .pipe(retry(1), catchError(this.showError));
  }

  showError(error: HttpErrorResponse) {
    let errorMessage = 'could not finish request';
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
