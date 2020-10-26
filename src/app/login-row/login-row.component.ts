import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-row',
  templateUrl: './login-row.component.html',
  styleUrls: ['./login-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginRowComponent implements OnInit {
  @Input() userLogin: string;
  constructor() {}

  ngOnInit(): void {}
}
