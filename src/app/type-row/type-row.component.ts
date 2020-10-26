import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-row',
  templateUrl: './type-row.component.html',
  styleUrls: ['./type-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypeRowComponent implements OnInit {
  @Input() userType: string;
  constructor() {}

  ngOnInit(): void {}
}
