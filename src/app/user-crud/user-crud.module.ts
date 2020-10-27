import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCrudService } from './user-crud.service';

import { UserCrudRoutingModule } from './user-crud-routing.module';
import { UserCrudComponent } from './user-crud.component';

@NgModule({
  declarations: [UserCrudComponent],
  imports: [CommonModule, UserCrudRoutingModule],
  providers: [UserCrudService],
})
export class UserCrudModule {}
