import { Component, OnInit } from '@angular/core';
import { ExampleService } from './example-service.service';

@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.scss']
})
export class ListExampleComponent implements OnInit {

  users: any = [];

  constructor(private exampleService: ExampleService) { }

  ngOnInit(): void {
    this.exampleService.getUsers()
      .subscribe((users) => {
        this.users = users;
      });
  }

  trackById(index: number, item: any) {
    if (!item) { return false; }
    return item.id
  }

  public adicionarUsuario(nome: string) {
    console.log('adicionarUser');

    const lastId = this.users.map((x: any) => x.id).sort((n1: any,n2:any) => n1 - n2)[this.users.length-1];
    const user  = {
      id: lastId + 1,
      login: nome,
      type:'User'
    }
 
    this.users.push(user);

    console.log(this.users);
  }

  public removerUsuario(id: number){
    const i = this.users.findIndex((x: any) => x.id === id);
    this.users.splice(i,1);
  }

}
