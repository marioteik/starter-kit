import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CrudDioService } from '../services/crud-dio.service';
import { TypeUserPIPE } from './../pipe/typeUser.pipe';

@Component({
  selector: 'app-crud-users-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './crud-users-list.component.html',
  styleUrls: ['./crud-users-list.component.scss'],
})
export class CrudUsersListComponent implements OnInit {
  @Input() listUsers: any[];

  selectedUser = {
    id: 0,
  };

  constructor(private crudService: CrudDioService) {}

  ngOnInit(): void {}

  trackById(index: number, item: any) {
    return item.id;
  }

  updateUser(user: any) {
    this.selectedUser.id = user.id;
  }

  deleteUser(user: any) {
    this.selectedUser.id = user.id;
  }

  getNewList(p: any) {
    this.listUsers = this.crudService.getUsersLocal();
  }
}
