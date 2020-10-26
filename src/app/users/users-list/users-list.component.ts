import { IUser } from './../users.service';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit, OnChanges {
  isEditing = false;
  currentRow: IUser;

  @Input() users: IUser[] = [];

  @Output() delete: EventEmitter<number> = new EventEmitter();
  @Output() save: EventEmitter<{ isNewUser: boolean; data: IUser }> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('usersListComponent changes', changes);
  }

  startEdit(row?: IUser) {
    this.isEditing = true;
    this.currentRow = row;
  }

  onEditClose(data?: IUser) {
    this.isEditing = false;
    if (!!data) {
      this.save.emit({ isNewUser: !this.currentRow, data });
    }
  }

  onDeleteClick(id: number) {
    this.delete.emit(id);
  }

  trackById(index: number, user: IUser) {
    return user.id;
  }
}
