import { ChangeDetectionStrategy, Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-field',
  templateUrl: './user-field.component.html',
  styleUrls: ['./user-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFieldComponent implements OnInit, OnChanges {
  @Input() data: any;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('userFieldComponent changes', changes);
  }
}
