import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const routes = {
  users: () => '/users'
}

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(private httpClient: HttpClient) { 
  }

  getUsers() {
    return this.httpClient.get(routes.users()).pipe(
      catchError(() => of('Não foi possível carregar os usuários'))
    )  
  }

}
