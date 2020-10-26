import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-user',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './data-user.component.html',
  styleUrls: ['./data-user.component.scss'],
})
export class DataUserComponent implements AfterViewInit {
  @Input() id: number;
  @Input() avatar_url: string;
  @Input() login: string;
  @Input() type: string;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cd.detectChanges();
  }
}
