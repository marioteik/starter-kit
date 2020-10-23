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
  user: Users;

  constructor(private challengeSevice: ChallengeListService, private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.challengeSevice.getUser().subscribe((users: Users[]) => {
      console.log(users);
      this.users = users;
      this.changeDetector.detectChanges();
    });
  }

  deleteUser(id: number) {
    this.challengeSevice.deleteUser(id).subscribe((users: Users[]) => {
      this.users = users;
      location.assign('/challenge-list');
    });
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
