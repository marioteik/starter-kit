import { Component, OnInit } from '@angular/core';
import { Crud } from '@app/models/crud-class';
import { isThisTypeNode } from 'typescript';
import { CrudService } from '../services/crud-service.service';

@Component({
  selector: 'app-crud-example',
  templateUrl: './crud-example.component.html',
  styleUrls: ['./crud-example.component.scss'],
})
export class CrudExampleComponent implements OnInit {
  constructor(service: CrudService) {
    this.service = service;
  }

  userList: Array<Crud>;
  service: CrudService;
  showMode = 'add';

  auxItem = new Crud('', '');

  ngOnInit(): void {
    this.userList = this.service.getUsers();
    console.log('user list', this.userList);
  }

  addUser() {
    // validar
    let user = new Crud(this.auxItem.name, this.auxItem.avatar);
    this.service.addUser(user);
    this.reset();
  }

  removeItem(item: Crud) {
    this.service.deleteUser(item);
  }

  editItem(item: Crud) {
    this.auxItem.code = item.code;
    this.auxItem.name = item.name;
    this.auxItem.avatar = item.avatar;
    this.showMode = 'edit';
  }

  updateUser() {
    this.service.updateUser(this.auxItem);
    this.reset();
  }

  reset() {
    this.auxItem = new Crud('', '');
    this.showMode = 'add';
  }

  trackById(index: number, user: Crud) {
    return user.code;
  }
}
