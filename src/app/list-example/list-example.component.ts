import { Component, OnInit } from '@angular/core';
import { ExampleService } from './example-service.service';

@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.scss'],
})
export class ListExampleComponent implements OnInit {
  users: any = [];

  constructor(private exampleService: ExampleService) {}

  ngOnInit(): void {
    this.exampleService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
