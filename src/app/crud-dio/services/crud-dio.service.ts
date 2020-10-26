import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CrudDioService {
  constructor(private httpClient: HttpClient) {}

  getUsersFromGit() {
    return this.httpClient.get('/users').pipe(catchError(() => of('Error, não foi possível carregar os logins :-(')));
  }

  getUsersLocal() {
    return JSON.parse(window.localStorage.getItem('userList'));
  }

  updateUser(user: any) {}

  deleteUser(userId: any) {}

  insertUser(user: any) {}
}
