import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Users } from './../model/users';
import { ChallengeListService } from './services/challenge-list.service';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.scss'],
})
export class ChallengeListComponent implements OnInit {
  users: Users[] = [];

  constructor(private challengeSevice: ChallengeListService, private router: Router) {}

  ngOnInit(): void {
    this.challengeSevice.getUsers().subscribe((users: Users[]) => {
      this.users = users;
    });
  }

  saveUser() {
    location.assign('/challenge-list/salvar');
  }
}
