import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCrudComponent } from './component';
import { ListaCrudRoutingModule } from './listacrud-routing.module';

@NgModule({
  declarations: [ListaCrudComponent],
  imports: [CommonModule, ListaCrudRoutingModule],
})
export class ListaCrudModule {}
