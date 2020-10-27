import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { finalize } from 'rxjs/operators';
import { User } from '../../@shared/entity/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  isLoading = false;
  users: User[];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.users = new Array();
    this.loadUsers();
  }

  loadUsers() {
    this.isLoading = true;
    this.crudService.listUsers()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((users: User[]) => {
        this.users = users;
      });
  }

  trackByUserId(index: number, user: User): string {
    return user._id;
  }

}
