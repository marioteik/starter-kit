import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './newsletter-child.component.html',
  styleUrls: ['./newsletter-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsletterChildComponent {
  @Input() data: string[];

  constructor() {}
}
