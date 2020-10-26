import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/index';
import { UserRegresResponse } from '../models/user-regres-response.model';
import { UserRegresCreatedResponse } from '../models/user-created-response.model';

@Injectable()
export class UserApiService {
  constructor(private http: HttpClient) {}
  baseUrl: string = 'https://reqres.in/api/users';

  getUsers(): Observable<UserRegresResponse> {
    return this.http.get<UserRegresResponse>(this.baseUrl + '?page=1');
  }

  getUserById(id: number): Observable<UserRegresResponse> {
    return this.http.get<UserRegresResponse>(this.baseUrl + '/' + id);
  }

  createUser(user: User): Observable<UserRegresCreatedResponse> {
    return this.http.post<UserRegresCreatedResponse>(this.baseUrl, user);
  }

  updateUser(user: User): Observable<UserRegresResponse> {
    return this.http.put<UserRegresResponse>(this.baseUrl + '/' + user.id, user);
  }

  deleteUser(id: number): Observable<UserRegresResponse> {
    return this.http.delete<UserRegresResponse>(this.baseUrl + '/' + id);
  }
}
