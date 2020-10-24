import { ActivatedRoute, Router } from '@angular/router';
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
  title: string;

  constructor(private route: ActivatedRoute, private challengeSevice: ChallengeListService, private router: Router) {}

  ngOnInit(): void {
    this.route.data.subscribe((info: { user: Users }) => {
      this.user = info.user;
    });
    this.editar = true;
    /*
    this.id = this.route.snapshot.params['id'];
    if (!isNaN(this.id)) {
      this.challengeSevice.getUserById(this.id).subscribe((user: Users) => {
        this.user = user;
      });
      this.editar = true;
      this.title = "Edit";
    } else {
      this.salvar = true;
      this.title = "Save"
    } */
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
      this.router.navigate(['/challenge-list']);
      //location.assign('/challenge-list');
    });
  }
}
