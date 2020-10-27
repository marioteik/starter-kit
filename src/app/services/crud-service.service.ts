import { Injectable } from '@angular/core';
import { last } from 'rxjs/operators';
import { Crud } from '../models/crud-class';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private userLsit = new Array<Crud>();

  constructor() {
    this.addUser(new Crud('José da Silva', 'icon-1'));

    this.addUser(new Crud('Antônio Maria', 'icon-2'));

    this.addUser(new Crud('Maria José', 'icon-1'));

    console.log(this.userLsit);
  }

  getUsers() {
    return this.userLsit;
  }

  addUser(user: Crud) {
    // validações
    let lastCode = 0;
    this.userLsit.map((m) => {
      lastCode = m.code > lastCode ? m.code : lastCode;
    });
    user.code = lastCode + 1;
    this.userLsit.push(user);
  }

  deleteUser(user: Crud) {
    // validar posição
    let index = this.userLsit.indexOf(user);
    this.userLsit.splice(index, 1);
  }

  updateUser(user: Crud) {
    // validar posição
    let old_user = this.userLsit.find((x) => x.code == user.code);
    old_user.name = user.name;
    old_user.avatar = user.avatar;
  }
}
