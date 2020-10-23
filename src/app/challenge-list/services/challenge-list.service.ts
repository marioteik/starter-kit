import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Users } from './../../model/users';
import { catchError, take } from 'rxjs/operators';
import { of } from 'rxjs';

const routes = {
  users: () => '/users',
};

@Injectable({
  providedIn: 'root',
})
export class ChallengeListService {
  constructor(private httpClient: HttpClient) {}

  getUser() {
    return this.httpClient.get(routes.users()).pipe(
      take(1),
      catchError(() => of('Erro ao carregar usuários'))
    );
  }

  PostUser(user: Users) {
    return this.httpClient.post(`${routes.users()}`, user).pipe(
      take(1),
      catchError(() => of('Erro ao inserir usuário'))
    );
  }

  putUser(id: number, user: Users) {
    return this.httpClient.put(`${routes.users()} / ${id}`, user).pipe(
      take(1),
      catchError(() => of('Erro ao editar usuário'))
    );
  }

  deleteUser(id: number) {
    return this.httpClient.delete(routes.users() + '/' + id).pipe(catchError(() => of('Erro ao deletar usuário')));
  }
}
