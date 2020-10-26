import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  url = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getUsario(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.url).pipe(retry(2), catchError(this.handleError));
  }

  saveUsuario(usario: Usuario): Observable<Usuario> {
    return this.httpClient
      .post<Usuario>(this.url, JSON.stringify(usario), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient
      .put<Usuario>(this.url + '/' + usuario.id, JSON.stringify(usuario), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteUsuario(usuario: Usuario) {
    return this.httpClient
      .delete<Usuario>(this.url + '/' + usuario.id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
