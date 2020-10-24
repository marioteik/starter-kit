import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const routes = {
  users: () => '/users',
};

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  originalUserList: any = [];
  users: any = [];

  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get(routes.users()).pipe(catchError(() => of('Error, could not load users')));
  }

  addUser() {
    const index = Math.floor(Math.random() * this.originalUserList.length);
    this.postUser(this.originalUserList[index]);
  }

  postUser(user: any) {
    this.users.push(user);
  }

  patchUser(user: any) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === user.id) {
        this.users[i] = user;
        return;
      }
    }
  }
  deleteUser(id: number) {
    const index = this.users.findIndex((p: { id: number }) => p.id === id);
    this.users.splice(index, 1);
  }
}
