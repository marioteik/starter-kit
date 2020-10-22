import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const routes = {
  users: () => '/users',
};

@Injectable({
  providedIn: 'root',
})
export class ChallengeListService {
  constructor(private httpCliente: HttpClient) {}
}
