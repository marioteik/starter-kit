import { Component, OnInit } from '@angular/core';
import { CrudDioService } from './services/crud-dio.service';
import { UserGitHub } from './crud-users.interface';

@Component({
  selector: 'app-crud-dio',
  templateUrl: './crud-dio.component.html',
  styleUrls: ['./crud-dio.component.scss'],
})
export class CrudDioComponent implements OnInit {
  loadingGitUsers = false;
  listGitUsers: any[];
  disableButton = false;

  constructor(private crudService: CrudDioService) {}

  ngOnInit(): void {}

  cloneGitUsers() {
    this.loadingGitUsers = true;
    this.disableButton = true;

    this.crudService
      .getUsersFromGit()
      .subscribe(
        (response: UserGitHub[]) => (
          (this.listGitUsers = response), window.localStorage.setItem('userList', JSON.stringify(response))
        )
      );
  }

  insertUser() {}

  updateUser() {}

  deleteUser() {}
}
