import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-list-user-info',
  templateUrl: './list-user-info.component.html',
  styleUrls: ['./list-user-info.component.scss'],
})
export class ListUserInfoComponent implements OnInit {
  user: User;
  idUser: number;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.idUser = +this.activatedRoute.snapshot.paramMap.get('id');

    if (this.idUser > 0) {
      this.userService.getUserById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(
        (user) => (this.user = user),
        (erro) => console.log('Erro ao retornar as informações do usuário.', erro)
      );
    } else {
      this.user = new User();
    }
  }

  saveButton(): void {
    this.userService.saveUser(this.user).subscribe(
      (user) => {
        console.log('Informações do usuário salvas com sucesso.', user);
        this.router.navigate(['/list-users']);
      },
      (erro) => console.log('Erro ao salvar informações do usuário.', erro)
    );
  }
}
