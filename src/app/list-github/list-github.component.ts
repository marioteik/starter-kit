import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-github',
  templateUrl: './list-github.component.html',
  styleUrls: ['./list-github.component.scss'],
})
export class ListGithubComponent implements OnInit {
  constructor() {}

  items = new Array(1000);

  ngOnInit(): void {}
}
