import { Component, OnInit } from '@angular/core';
import { ListGithubService } from './service/list-github-service.service';

@Component({
  selector: 'app-list-github',
  templateUrl: './list-github.component.html',
  styleUrls: ['./list-github.component.scss'],
})
export class ListGithubComponent implements OnInit {
  constructor(private listGithubService: ListGithubService) {}

  items = new Array(1000);

  ngOnInit(): void {
    this.listGithubService.getUsers().subscribe((users) => {
      console.log(users);
    });
  }
}
