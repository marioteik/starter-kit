import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { catchError, take, tap } from 'rxjs/operators';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ListUsersService {
  private readonly API = `${environment.API}user`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<User[]>(this.API).pipe(
      // delay(2000), // delay para testar o async
      tap(console.log)
    );
  }

  loadById(id: number) {
    return this.http.get<User>(`${this.API}/${id}`).pipe(take(1));
  }

  create(user: User) {
    return this.http.post(this.API, user).pipe(take(1), tap(console.log));
  }

  update(user: User) {
    return this.http.put(`${this.API}/${user.id}`, user).pipe(take(1));
  }

  save(user: User) {
    if (user.id) {
      return this.update(user);
    }
    return this.create(user);
  }

  remove(user: User) {
    return this.http.delete(`${this.API}/${user.id}`).pipe(take(1));
  }
}
