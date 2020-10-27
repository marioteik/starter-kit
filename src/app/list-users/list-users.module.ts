import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ListUsersRoutingModule } from './list-users-routing.module';
import { ListUsersComponent } from './list-users.component';

@NgModule({
  declarations: [ListUsersComponent],
  imports: [CommonModule, ListUsersRoutingModule, FormsModule],
  providers: [],
})
export class ListUsersModule {}
