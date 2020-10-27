import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { User } from '../model/user.model';
import { ListaCrudService } from '../service';

@Component({
  selector: 'app-lista-crud',
  templateUrl: './lista-crud.component.html',
  styleUrls: ['./lista-crud.component.scss'],
})
export class ListaCrudComponent implements OnInit {
  public users: User[];

  constructor(private service: ListaCrudService) {}

  ngOnInit(): void {
    this.service.getUsers().subscribe((res) => {
      console.log(res);
      this.users = res.map((user) => {
        return new User(user.id, user.nome, user.sobrenome);
      });
    });
  }
}
