import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class ListaCrudService {
  private url: string = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  postUser(user: User) {
    return this.http.post(this.url, user).pipe(take(1));
  }

  patchUser(user: User) {
    const path: string = this.url + '/' + user.id;
    return this.http.patch(path, user).pipe(take(1));
  }
}
