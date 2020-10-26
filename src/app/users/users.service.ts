import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export interface IUser {
  id: number;
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getAllUsers(): Observable<IUser[]> {
    return this.httpClient
      .get<IUser[]>(environment.usersApiUrl, { observe: 'body' })
      .pipe(
        tap((resp) => console.log('resp', resp)),
        // map((body: any) => body),
        catchError(() => of([]))
      );
  }

  addOrUpdateUser(isNewUser: boolean, data: IUser): Observable<IUser> {
    return isNewUser
      ? this.httpClient.post<IUser>(environment.usersApiUrl, data)
      : this.httpClient.put<IUser>(`${environment.usersApiUrl}/${data.id}`, data);
  }

  deleteUser(id: number): Observable<boolean> {
    return this.httpClient.delete(`${environment.usersApiUrl}/${id}`).pipe(
      map((resp) => true),
      catchError(() => of(false))
    );
  }
}
