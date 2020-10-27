import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.users = this.userService.retrieveAll();
  }

  deleteById(id: number): void {
    this.userService.delete(id);
  }
}
