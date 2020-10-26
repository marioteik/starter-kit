import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { UserGitHub } from './../crud-users.interface';

@Component({
  selector: 'app-crud-edit-form',
  templateUrl: './crud-edit-form.component.html',
  styleUrls: ['./crud-edit-form.component.scss'],
})
export class CrudEditFormComponent implements OnInit, OnChanges {
  @Input() set setUserId(p: number) {
    this.userToEdit = p;
  }

  @Output() refreshList = new EventEmitter();

  userToEdit: number;
  detailsUser: any;

  constructor() {}

  ngOnInit(): void {
    this.getDetailsFromUser(this.userToEdit);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getDetailsFromUser(this.userToEdit);
  }

  getDetailsFromUser(id: number) {
    const listaUsuarios = window.localStorage.getItem('userList');
    this.detailsUser = JSON.parse(listaUsuarios).filter((p: UserGitHub) => p.id === id);
  }

  saveUser() {
    const listUsers = JSON.parse(window.localStorage.getItem('userList'));
    const changedUser = listUsers.find((p: UserGitHub) => p.id === this.detailsUser[0].id);

    changedUser.login = this.detailsUser[0].login;
    changedUser.html_url = this.detailsUser[0].html_url;

    window.localStorage.setItem('userList', JSON.stringify(listUsers));
    this.refreshList.emit();
  }
}
