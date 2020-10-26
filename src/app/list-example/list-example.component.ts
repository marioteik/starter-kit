import { Component, OnInit } from '@angular/core';
import { ListExampleService } from './services/list-example.service';

@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.scss'],
})
export class ListExampleComponent implements OnInit {
  items: any[];

  constructor(private list_service: ListExampleService) {}

  ngOnInit(): void {
    this.list_service.getUsers().subscribe((users: any) => {
      this.items = users;
    });
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
