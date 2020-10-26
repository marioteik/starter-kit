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
    this.userCrudService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
