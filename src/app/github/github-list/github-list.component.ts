import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GithubService } from '../service/github.service';

@Component({
  selector: 'app-github-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './github-list.component.html',
  styleUrls: ['./github-list.component.scss'],
})
export class GithubListComponent implements OnInit {
  users: any = [];

  constructor(private githubService: GithubService, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.githubService.getUsers().subscribe((users) => {
      this.users = users;
      this.ref.detectChanges();
    });
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
