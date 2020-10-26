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
  goTo(page: string) {
    this.router.navigateByUrl(`/${page}`);
  }
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void {
    this.listGithubService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
  trackById(index: number, item: any) {
    return item.id;
  }
  remove(id: number) {
    this.listGithubService.removeUser(id).subscribe(() => {
      this.getUsers();
    });
  }
  editUser(id: number, avatarUrl: string, userLogin: string, userType: string) {
    this.listGithubService.editUser(id, avatarUrl, userLogin, userType).subscribe(() => {
      this.getUsers();
    });
  }
}
