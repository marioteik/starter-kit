import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserApiService } from '../../service/user-api.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {
  users: User[];

  constructor(private router: Router, private apiService: UserApiService) {}

  ngOnInit() {
    this.apiService.getUsers().subscribe((r) => {
      this.users = r.data;
    });
  }

  deleteUser(user: User): void {
    this.apiService.deleteUser(user.id).subscribe((r) => {
      this.users = this.users.filter((u) => u !== user);
    });
  }

  editUser(user: User): void {
    window.localStorage.removeItem('editUserId');
    window.localStorage.setItem('editUserId', user.id.toString());
    this.router.navigate(['edit-user']);
  }

  addUser(): void {
    this.router.navigate(['add-user']);
  }

  trackByFn(index: any, item: any) {
    return index;
  }
}
