import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import { Users } from './../model/users';
import { ChallengeListService } from './services/challenge-list.service';

@Component({
  selector: 'app-challenge-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.scss'],
})
export class ChallengeListComponent implements OnInit {
  users: Users[] = [];

  constructor(private challengeSevice: ChallengeListService, private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.challengeSevice.getUsers().subscribe((users: Users[]) => {
      this.users = users;
      this.changeDetector.detectChanges();
    });
  }

  saveUser() {
    //this.router.navigate(['/challenge-list', 'salvar']);
    location.assign('/challenge-list/salvar');
  }
}
