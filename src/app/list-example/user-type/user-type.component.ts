import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-type',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.scss']
})
export class UserTypeComponent implements OnInit {

  @Input() type: string;
  constructor() { }

  ngOnInit(): void {
  }

}
