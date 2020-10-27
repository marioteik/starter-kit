import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'td-crud',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './td-crud.component.html',
  styleUrls: ['./td-crud.component.scss'],
})
export class TdCrudComponent implements OnInit {
  @Input() value: any;
  @Input() isNumber: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
