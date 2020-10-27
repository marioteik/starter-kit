import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { ListExampleService } from './list-example.service';

@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.scss'],
})
export class ListExampleComponent implements OnInit {
  users: any = [];
  urlImagem: string;
  constructor(private exampleService: ListExampleService) {}

  ngOnInit(): void {
    this.exampleService.getUsers().subscribe((users) => {
      this.exampleService.users = users;
      this.exampleService.originalUserList = users;
      this.users = this.exampleService.users;
    });
  }

  trackById(index: number, item: any) {
    if (item) return item.id;
  }

  remover(user: any) {
    this.exampleService.deleteUser(user.id);
  }

  novo() {
    this.exampleService.addUser();
  }

  update(user: any) {
    if (this.urlImagem) {
      user.avatar_url = this.urlImagem;
      this.exampleService.patchUser(user);
    }
  }
}
