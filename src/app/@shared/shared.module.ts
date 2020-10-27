import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { TdCrudComponent } from './td-crud/td-crud.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, TdCrudComponent],
  exports: [LoaderComponent, TdCrudComponent],
})
export class SharedModule {}
