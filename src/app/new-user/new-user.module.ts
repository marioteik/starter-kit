import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewUserRoutingModule } from './new-user-routing.module';
import { NewUserComponent } from './new-user.component';

@NgModule({
  declarations: [NewUserComponent],
  imports: [CommonModule, NewUserRoutingModule],
})
export class NewUserModule {}
