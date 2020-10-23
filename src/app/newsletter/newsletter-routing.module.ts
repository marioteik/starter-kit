import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { NewsletterComponent } from './newsletter.component';

const routes: Routes = [{ path: '', component: NewsletterComponent, data: { title: marker('Newsletter') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class NewsletterRoutingModule {}
