import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { ChallengeListService } from './../../services/challenge-list.service';
import { Users } from './../../../model/users';

@Component({
  selector: 'app-form-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  constructor(
    private route: ActivatedRoute,
    private changeDetector: ChangeDetectorRef,
    private challengeSevice: ChallengeListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inscricao = this.route.data.subscribe((info: { user: Users }) => {
      if (info.user.id != null) {
        this.user = info.user;

        this.editar = true;
        this.title = 'Edit';
        this.salvar = false;
        this.changeDetector.detectChanges();
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
