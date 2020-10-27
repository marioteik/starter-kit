import { Component, OnInit } from '@angular/core';
import { ListExampleService } from './service/list-example.service';
import jsondata from './users.json';

@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.scss'],
})
export class ListExampleComponent implements OnInit {
  users: any = jsondata;
  nextId: number = 11;
  name: string;
  email: string;

  constructor(private exampleService: ListExampleService) {}

  ngOnInit(): void {}

  deleteUser(id: number): void {
    const isExist = this.users.some((user: any) => user.id == id);
    if (isExist) {
      const result = this.users.filter((user: any) => user.id != id);
      this.users = result;
    }
  }

  editUser(id: number): void {}

  addUser(): void {
    const user = { id: this.nextId++, name: this.name, email: this.email };
    this.users.push(user);
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
