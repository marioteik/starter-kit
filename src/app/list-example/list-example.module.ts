import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListExampleRoutingModule } from './list-example-routing.module';
import { ListExampleComponent } from './list-example.component';
import { ListExampleService } from './service/list-example.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListExampleComponent],
  imports: [CommonModule, ListExampleRoutingModule, FormsModule],
  providers: [ListExampleService],
})
export class ListExampleModule {}
