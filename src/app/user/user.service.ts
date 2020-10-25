import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';

const apiUrl = 'http://localhost:3000/users';

const routes = {
  gitHubUser: (username: string) => `https://api.github.com/users/${username}`,
  userById: (id: number) => `${apiUrl}/${id}`,
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  readFromGitHub(username: string): Observable<User> {
    return this.http.get<User>(routes.gitHubUser(username));
  }

  create(user: User) {
    return this.http.post(apiUrl, user);
  }

  readAll(): Observable<User[]> {
    return this.http.get<User[]>(apiUrl);
  }

  readById(id: number): Observable<User> {
    return this.http.get<User>(routes.userById(id));
  }

  update(user: User) {
    return this.http.put(routes.userById(user.id), user);
  }

  delete(id: number) {
    return this.http.delete(routes.userById(id));
  }
}
