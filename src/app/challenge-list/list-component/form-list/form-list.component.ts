import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { ChallengeListService } from './../../services/challenge-list.service';
import { Users } from './../../../model/users';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss'],
})
export class FormListComponent implements OnInit {
  user: Users = new Users();
  id: number;
  inscricao: Subscription;
  salvar: boolean = false;
  editar: boolean = false;
  title: string;

  constructor(private route: ActivatedRoute, private challengeSevice: ChallengeListService, private router: Router) {}

  ngOnInit(): void {
    this.inscricao = this.route.data.subscribe((info: { user: Users }) => {
      if (info.user.id != null) {
        this.user = info.user;

        this.editar = true;
        this.title = 'Edit';
        this.salvar = false;
      } else {
        this.salvar = true;
        this.title = 'Save';
      }
    });
  }

  saveUser() {
    this.challengeSevice.PostUser(this.user).subscribe((user: Users) => {
      this.user = user;
      location.assign('/challenge-list');
    });
  }

  editUser() {
    this.challengeSevice.putUser(this.user.id, this.user).subscribe((user: Users) => {
      this.user = user;
      this.router.navigate(['/challenge-list']);
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
