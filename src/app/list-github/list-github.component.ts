import { Component, OnInit } from '@angular/core';
import { ListGithubService } from '../@core/service/list-github-service.service';

@Component({
  selector: 'app-list-github',
  templateUrl: './list-github.component.html',
  styleUrls: ['./list-github.component.scss'],
})
export class ListGithubComponent implements OnInit {
  constructor(private listGithubService: ListGithubService) {}

  users: any = [];

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
}
