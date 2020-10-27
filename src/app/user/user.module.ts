import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent, UserInfoComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule],
})
export class UserModule {}
