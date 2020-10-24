import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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
  salvar: boolean = false;
  editar: boolean = false;

  constructor(private route: ActivatedRoute, private challengeSevice: ChallengeListService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (!isNaN(this.id)) {
      this.challengeSevice.getUserById(this.id).subscribe((user: Users) => {
        this.user = user;
      });
      this.editar = true;
    } else {
      this.salvar = true;
    }
  }

  saveUser() {
    this.challengeSevice.PostUser(this.user).subscribe((user: Users) => {
      this.user = user;
      console.log(this.user);
      location.assign('/challenge-list');
    });
  }

  editUser() {
    this.challengeSevice.putUser(this.user.id, this.user).subscribe((user: Users) => {
      this.user = user;
      console.log(this.user);
      //location.assign('/challenge-list');
    });
  }
}
