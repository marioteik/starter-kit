import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-card-user',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss'],
})
export class CardUserComponent {
  @Input() user: User;
  @Input() cardClass = 'card';
  constructor() {}
}
