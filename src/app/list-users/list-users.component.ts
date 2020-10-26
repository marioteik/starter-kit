import { Component, Input, OnInit } from '@angular/core';

import { ListUsersService } from './list-users.service';
import { User } from './user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-users',
  // changeDetection: ChangeDetectionStrategy.OnPush, // carrega apenas os itens alterados
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  // @Input() changeDetectionExample: string;

  users$: Observable<User[]>;

  constructor(private service: ListUsersService) {}

  ngOnInit(): void {
    this.users$ = this.service.list();
  }

  onAddUser(user: User) {
    this.service.create(user).subscribe();
  }

  onEdit(user: User) {
    this.service.update(user).subscribe();
  }

  onDelete(user: User) {
    this.service.remove(user).subscribe();
  }

  //trackById
  trackById(index: number, item: any) {
    return item.id;
  }
}
