import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: Array<User>;
  userName: string;
  selectedUser: User;
  isLoading: boolean;

  constructor(private userService: UserService, private modalService: NgbModal) {}

  ngOnInit() {
    this.loadUsers();
  }

  selectUser(user: User) {
    if (user === this.selectedUser) this.selectedUser = null;
    else this.selectedUser = user;
  }

  trackById(id: number, item: any) {
    return item.id;
  }

  openEditModal(content: any) {
    this.modalService.open(content, { size: 'lg' }).result.then(
      (result) => {
        console.log(result);
        this.updateUser(this.selectedUser);
      },
      (reason) => {
        console.log(reason);
      }
    );
  }

  openModal(content: any) {
    this.modalService.open(content).result.then(
      (result) => {
        console.log(result);
        this.cloneUser(this.userName);
      },
      (reason) => {
        console.log(reason);
      }
    );
  }

  cloneUser(username: string) {
    this.userService.readFromGitHub(username).subscribe(
      (user) => {
        this.saveUser(user);
      },
      (error) => console.log(error)
    );
  }

  loadUsers() {
    this.isLoading = true;
    this.userService
      .readAll()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (users) => {
          this.users = users;
        },
        (error) => console.log(error)
      );
  }

  saveUser(user: User) {
    this.userService.create(user).subscribe(
      () => {
        this.loadUsers();
      },
      (error) => console.log(error)
    );
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(
      () => {
        this.selectedUser = null;
        this.loadUsers();
      },
      (error) => console.log(error)
    );
  }

  updateUser(user: User) {
    this.userService.update(user).subscribe(
      () => {
        this.selectedUser = null;
        this.loadUsers();
      },
      (error) => console.log(error)
    );
  }
}
