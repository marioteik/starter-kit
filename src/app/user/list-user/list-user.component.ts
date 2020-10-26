import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user';

import { UserService } from '../service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {
  _users: User[] = [];
  usersFiltered: User[] = [];
  _filterBy: string;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getAllUsers().subscribe((users) => {
      this._users = users;
      this.usersFiltered = this._users;
    });
  }

  trackById(index: number, item: any) {
    return item.id;
  }

  set filter(value: string) {
    this._filterBy = value;
    this.usersFiltered = this._users.filter(
      (user: User) => user.login.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1
    );
  }

  get filter(): string {
    return this._filterBy;
  }

  deleteById(id: number, login: string): void {
    this.userService.deletarPorId(id).subscribe({
      next: () => {
        console.log('Usuário deletado com sucesso.');
        this.getUsers();
      },
      error: (erro) => console.log('Erro ao deletar um usuário.', erro),
    });
  }

  newUser(): void {
    this.router.navigate(['/list-users/newUser']);
  }
}
