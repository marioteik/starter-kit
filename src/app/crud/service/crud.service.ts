import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../../@shared/entity/User';

const endpoints = {
  list: '/users',
  create: '/users',
  read: (u: User) => `/users/${u._id}`,
  update: (u: User) => `/users/${u._id}`,
  delete: (u: User) => `/users/${u._id}`
};

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpClient: HttpClient) { }

  listUsers(): Observable<User[]> {
    return this.httpClient.get(endpoints.list).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load users'))
    );
  }

  createUser(user: User) {
    return this.httpClient.post(endpoints.create, user);
  }

  readUser(user: User) {
    return this.httpClient.get(endpoints.read(user));
  }

  updateUser(user: User) {
    return this.httpClient.put(endpoints.update(user), {
      name: user.name,
      age: user.age,
      active: user.active
    });
  }

  deleteUser(user: User) {
    return this.httpClient.delete(endpoints.delete(user));
  }
}
