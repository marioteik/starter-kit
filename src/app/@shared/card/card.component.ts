import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '@app/models/user';
import { IUsers } from '@app/models/users';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() data: Array<IUsers> = [];
  @Output() removeUser = new EventEmitter();
  @Output() searchPlusUser = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onSearchPlusUser(user: IUser) {
    this.searchPlusUser.emit(user);
  }

  onTrashUser(userId: number) {
    this.removeUser.emit(userId);
  }

  trackByUserId(index: number, item: any) {
    return item.id;
  }
}
