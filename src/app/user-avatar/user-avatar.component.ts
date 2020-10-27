import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent implements OnInit {
  @Input() changeDetectionExample: string;

  constructor() {}

  ngOnInit(): void {}
}
