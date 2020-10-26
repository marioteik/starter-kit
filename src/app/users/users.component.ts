import { IUser, UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  onDeleteUser(id: number) {
    this.usersService.deleteUser(id).subscribe((resp) => {
      if (resp) {
        this.users = [...this.users.filter((u) => u.id !== id)];
      }
    });
  }

  onSaveUser(options: { isNewUser: boolean; data: IUser }) {
    const { isNewUser, data } = options;
    this.usersService.addOrUpdateUser(isNewUser, data).subscribe((resp) => {
      if (!!resp) {
        if (isNewUser) {
          this.users = [...this.users, resp];
        } else {
          const userIndex = this.users.findIndex((u) => u.id === data.id);
          this.users[userIndex] = data;
          this.users = [...this.users];
        }
      }
    });
  }
}
