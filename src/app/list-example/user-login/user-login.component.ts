import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  
  @Input() login: string;
  constructor() { }

  ngOnInit(): void {
  }

}
