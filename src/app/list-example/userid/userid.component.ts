import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-userid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './userid.component.html',
  styleUrls: ['./userid.component.scss']
})
export class UseridComponent implements OnInit {

  @Input() id: number;
  constructor() { }

  ngOnInit(): void {
  }
}
