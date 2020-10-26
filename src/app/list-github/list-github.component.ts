import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListGithubService } from '../@core/service/list-github-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-github',
  templateUrl: './list-github.component.html',
  styleUrls: ['./list-github.component.scss'],
})
export class ListGithubComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(private listGithubService: ListGithubService, private router: Router) {}
  users: any = [];
  isLoading = false;
  goTo(page: string) {
    this.router.navigateByUrl(`/${page}`);
  }
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void {
    this.isLoading = true;
    this.listGithubService.getUsers().subscribe((users) => {
      this.users = users;
      this.isLoading = false;
    });
  }
  trackById(index: number, item: any) {
    return item.id;
  }
  remove(id: number) {
    this.isLoading = true;
    this.listGithubService.removeUser(id).subscribe(() => {
      this.getUsers();
      this.isLoading = false;
    });
  }
  editUser(id: number, avatarUrl: string, userLogin: string, userType: string) {
    this.isLoading = true;
    this.listGithubService.editUser(id, avatarUrl, userLogin, userType).subscribe(() => {
      this.getUsers();
      this.isLoading = false;
    });
  }
}
