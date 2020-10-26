import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  @Input()
  version: string | null = environment.version;

  constructor() {}

  ngOnInit() {}
}
