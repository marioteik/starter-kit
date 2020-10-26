import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListGithubService } from '../@core/service/list-github-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(private listGithubService: ListGithubService, private router: Router) {}

  ngOnInit(): void {}
  createUser(avatarUrl: string, userLogin: string, userType: string) {
    this.listGithubService.createUser(avatarUrl, userLogin, userType).subscribe(() => {
      this.router.navigateByUrl(`/list-github`);
    });
  }
}
