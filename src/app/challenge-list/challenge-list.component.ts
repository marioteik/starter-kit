import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';

import { Users } from './../model/users';
import { ChallengeListService } from './services/challenge-list.service';

@Component({
  selector: 'app-challenge-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.scss'],
})
export class ChallengeListComponent implements OnInit {
  @Input() users: Users[] = [];
  user: Users = new Users();

  constructor(
    private challengeSevice: ChallengeListService,
    private changeDetector: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.challengeSevice.getUsers().subscribe((users: Users[]) => {
      this.users = users;
      this.changeDetector.detectChanges();
    });
  }

  editarUser(id: number) {
    this.router.navigate(['/challenge-list/', id]);
  }

  saveUser() {
    //this.router.navigate(['/challenge-list', 'salvar']);
    location.assign('/challenge-list/salvar');
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
