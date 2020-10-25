import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { ChallengeListService } from './../../services/challenge-list.service';
import { Users } from './../../../model/users';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() users: Users[] = [];

  constructor(private challengeSevice: ChallengeListService, private router: Router) {}

  ngOnInit(): void {}

  editarUser(id: number) {
    this.router.navigate(['/challenge-list', id]);
  }

  deleteUser(id: number) {
    this.challengeSevice.deleteUser(id).subscribe((users: Users[]) => {
      this.users.concat(users);
      this.ngOnInit();
      //location.assign('/challenge-list');
    });
  }

  trackById(index: number, item: Users) {
    return item.id;
  }
}
