import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar-row',
  templateUrl: './avatar-row.component.html',
  styleUrls: ['./avatar-row.component.scss'],
})
export class AvatarRowComponent implements OnInit {
  @Input() avatarUrl: string;
  @Input() userLogin: string;
  constructor() {}

  ngOnInit(): void {}
}
