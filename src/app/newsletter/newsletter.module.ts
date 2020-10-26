import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { NewsletterRoutingModule } from './newsletter-routing.module';
import { NewsletterComponent } from './newsletter.component';
import { NewsletterChildComponent } from './newsletter-child.component';

@Injectable({
  providedIn: 'root',
})
@NgModule({
  imports: [CommonModule, TranslateModule, NewsletterRoutingModule],
  declarations: [NewsletterComponent, NewsletterChildComponent],
})
export class NewsletterModule {}
