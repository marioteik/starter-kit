import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./user-avatar.component.scss'],
  template: `<ng-content></ng-content>`,
})
export class UserAvatarComponent implements OnInit {
  @Input() changeDetectionExample: string;
  constructor() {}

  ngOnInit(): void {}
}
