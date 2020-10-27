import { Component, OnInit } from '@angular/core';
import { UserCrudService } from './user-crud.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.scss'],
})
export class UserCrudComponent implements OnInit {
  users: any = [];

  constructor(private userCrudService: UserCrudService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  trackById(index: number, item: any) {
    return item.id;
  }

  updateUser(user: any) {
    this.userCrudService.updateUser(user).subscribe((data) => {
      this.getUsers();
    });
  }

  deleteUser(id: number) {
    this.userCrudService.deleteUser(id).subscribe((data) => {
      this.getUsers();
    });
  }

  getUsers() {
    this.userCrudService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
