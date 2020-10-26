import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '@app/users/users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  frmUser: FormGroup;
  isNewUser = false;
  @Input() user: IUser;

  // tslint:disable-next-line: no-output-native
  @Output() close: EventEmitter<IUser> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.isNewUser = !this.user;
    this.frmUser = this.fb.group({
      id: new FormControl(this.user?.id),
      name: new FormControl(this.user?.name, [Validators.required]),
      age: new FormControl(this.user?.age, [Validators.required, Validators.min(1), Validators.max(100)]),
    });
  }

  onSaveClick() {
    this.close.emit(this.frmUser.value);
  }

  onCloseClick() {
    this.close.emit();
  }
}
