import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCrudComponent } from './component';
import { ListaCrudRoutingModule } from './listacrud-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListaCrudComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ListaCrudRoutingModule],
})
export class ListaCrudModule {}
