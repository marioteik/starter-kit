import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { StatusPipe } from './status.pipe';
import { UserRowComponent } from './list/user-row/user-row.component';


@NgModule({
  declarations: [ListComponent, CreateComponent, EditComponent, StatusPipe, UserRowComponent],
  imports: [
    CommonModule,
    CrudRoutingModule,
    ReactiveFormsModule
  ]
})
export class CrudModule { }
