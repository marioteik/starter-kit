import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  retrieveAll(): User[] {
    return USERS;
  }

  retrieveById(id: number): User {
    return USERS.find((userIterator: User) => userIterator.id === id);
  }

  save(user: User): void {
    if (user.id) {
      const index = USERS.findIndex((userIterator: User) => userIterator.id === user.id);
      USERS[index] = user;
    }
  }

  add(user: User): void {
    USERS.push(user);
  }

  delete(id: number): void {
    const index = USERS.findIndex((userIterator: User) => userIterator.id === id);
    if (index !== -1) {
      USERS.splice(index, 1);
    }
  }
}

var USERS: User[] = [
  {
    login: 'mojodna',
    id: 45,
    avatar_url: 'https://avatars2.githubusercontent.com/u/45?v=4',
  },
  {
    login: 'mojombo',
    id: 1,
    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
  },
  {
    login: 'defunkt',
    id: 2,
    avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
  },
];
