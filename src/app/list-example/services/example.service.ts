import { HttpClient, HttpHeaders } from '@angular/common/http';
import { _ParseAST } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { IUser } from '@app/models/user';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IGithubUsersData } from '../../models/github-users-data';
import { IUsers } from '../../models/users';

const routes = {
  user: (u: IUserContext) => `/users/${u.id}`,
  users: () => `/users`,
};

interface IUserContext {
  id: number;
}

export interface formData {
  id: number;
  name: string;
  login: string;
  htmlUrl: string;
  avatarUrl: string;
  followers: number;
  following: number;
  type: string;
  siteAdmin: boolean;
  location: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': '	application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  updateUser(form: formData): Observable<IUser | string> {
    return this.httpClient
      .put<IUser>(routes.user({ id: form.id }), JSON.stringify(this.transformToIUser(form)), {
        headers: this.httpOptions.headers,
      })
      .pipe(catchError(() => of('Error, could not save user :-(')));
  }

  removeUser(userId: number): Observable<IUser | string> {
    return this.httpClient
      .delete<IUser>(routes.user({ id: userId }), {
        headers: this.httpOptions.headers,
      })
      .pipe(catchError(() => of('Error, could not save user :-(')));
  }

  addUser(form: formData): Observable<IUser | string> {
    return this.httpClient
      .post<IUser>(routes.users(), JSON.stringify(this.transformToIUser(form)), {
        headers: this.httpOptions.headers,
      })
      .pipe(catchError(() => of('Error, could not save user :-(')));
  }

  getUser(userId: number): Observable<formData | string> {
    return this.httpClient.get(routes.user({ id: userId })).pipe(
      map((data: IGithubUsersData) => this.transformToIFormData(data)),
      catchError(() => of('Error, could not load users :-('))
    );
  }

  getUsers(): Observable<Array<IUsers> | string> {
    return this.httpClient.get(routes.users()).pipe(
      map((data: Array<IGithubUsersData>) => this.transformToIUsers(data)),
      catchError(() => of('Error, could not load users :-('))
    );
  }

  private transformToIUsers(data: Array<IGithubUsersData>): Array<IUsers> {
    const users: Array<IUsers> = [];
    data.forEach((user) =>
      users.push({
        id: user.id,
        login: user.login,
        name: user.name,
        location: user.location,
        followers: user.followers,
        following: user.following,
        avatar_url: user.avatar_url,
        html_url: user.html_url,
        url: user.url,
        type: user.type,
        created_at: user.created_at,
      })
    );
    return users;
  }

  private transformToIFormData(data: IGithubUsersData): formData {
    const form: formData = {
      id: data.id,
      name: data.name,
      avatarUrl: data.avatar_url,
      following: data.following,
      followers: data.followers,
      login: data.login ? data.login : '',
      htmlUrl: data.html_url ? data.html_url : '',
      type: data.type ? data.type : '',
      siteAdmin: data.site_admin ? data.site_admin : false,
      location: data.location ? data.location : '',
      createdAt: data.created_at ? new Date(data.created_at).toLocaleDateString() : '',
      updatedAt: data.updated_at ? new Date(data.updated_at).toLocaleDateString() : '',
    };
    return form;
  }

  private transformToIUser(formData: formData): IUser {
    const user: IUser = {
      id: formData.id,
      name: formData.name,
      avatar_url: formData.avatarUrl,
      followers: formData.followers,
      following: formData.following,
      login: formData.login,
      html_url: formData.htmlUrl,
      type: formData.type ? formData.type : '',
      site_admin: formData.siteAdmin ? formData.siteAdmin : false,
      location: formData.location ? formData.location : '',
      created_at: formData.createdAt ? formData.createdAt : Date.now().toPrecision(),
      updated_at: formData.updatedAt ? formData.updatedAt : Date.now().toPrecision(),
    };
    delete user.id;
    return user;
  }

  // getRandomQuote(context: UsersContext): Observable<string> {
  //   return this.httpClient.get(routes.user(context)).pipe(
  //     map((body: any) => body.value),
  //     catchError(() => of('Error, could not load joke :-('))
  //   );
  // }
}
