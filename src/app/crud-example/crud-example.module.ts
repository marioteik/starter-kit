import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrudExampleRoutingModule } from './crud-example-routing.module';
import { CrudExampleComponent } from './crud-example.component';
import { SharedModule } from '@app/@shared';

@NgModule({
  declarations: [CrudExampleComponent],
  imports: [CommonModule, CrudExampleRoutingModule, FormsModule, SharedModule],
})
export class CrudExampleModule {}
