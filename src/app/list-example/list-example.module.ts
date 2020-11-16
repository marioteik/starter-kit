import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListExampleRoutingModule } from './list-example-routing.module';
import { ListExampleComponent } from './list-example.component';

@NgModule({
  declarations: [ListExampleComponent],
  imports: [CommonModule, ListExampleRoutingModule],
  providers: [],
})
export class ListExampleModule {}
