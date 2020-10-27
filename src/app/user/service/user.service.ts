import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private serverUrl: string = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.serverUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.serverUrl}/${id}`);
  }

  deletarPorId(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.serverUrl}/${id}`);
  }

  saveUser(user: User): Observable<User> {
    if (user.id) {
      return this.httpClient.put<User>(`${this.serverUrl}/${user.id}`, user);
    } else {
      return this.httpClient.post<User>(`${this.serverUrl}`, user);
    }
  }
}
