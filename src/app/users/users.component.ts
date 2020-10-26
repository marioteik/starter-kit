import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import {} from '@angular/compiler/src/core';

import { UserService } from './user.service';
import { ResponseUsers } from './user.model';

@Component({
  selector: 'app-users',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  @Input()
  responseUsers: ResponseUsers;

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getUsers().subscribe((res) => (this.responseUsers = res));
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
