import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-row',
  templateUrl: './login-row.component.html',
  styleUrls: ['./login-row.component.scss'],
})
export class LoginRowComponent implements OnInit {
  @Input() userLogin: string;
  constructor() {}

  ngOnInit(): void {}
}
