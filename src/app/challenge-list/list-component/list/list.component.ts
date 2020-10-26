import { Router } from '@angular/router';
import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { ChallengeListService } from './../../services/challenge-list.service';
import { Users } from './../../../model/users';

@Component({
  selector: 'app-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() users: Users[] = [];

  constructor(
    private challengeSevice: ChallengeListService,
    private changeDetector: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {}

  editarUser(id: number) {
    this.router.navigate(['/challenge-list', id]);
  }

  deleteUser(user: Users) {
    this.challengeSevice.deleteUser(user.id).subscribe((users: Users[]) => {
      const index = this.users.indexOf(user);
      this.users.splice(index, 1);
      this.changeDetector.detectChanges();
    });
  }

  trackById(index: number, item: Users) {
    return item.id;
  }
}
