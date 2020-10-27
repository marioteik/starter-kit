import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User } from '@app/user/user';
import { UsersService } from './service/users-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-users',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  user = {} as User;
  users: User[];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  trackById(user: User) {
    return user.id;
  }

  create(user: User) {
    this.usersService.createUser(user);
  }

  update(user: User) {
    this.usersService.updateUser(user).subscribe(() => {
      this.usersService.getUsers();
    });
  }

  delete(user: User) {
    this.usersService.deleteUser(user).subscribe(() => {
      this.usersService.getUsers();
    });
  }
}
