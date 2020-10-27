import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAvatarRoutingModule } from './user-avatar-routing.module';
import { UserAvatarComponent } from './user-avatar.component';

@NgModule({
  declarations: [UserAvatarComponent],
  imports: [CommonModule, UserAvatarRoutingModule],
  exports: [UserAvatarComponent],
})
export class UserAvatarModule {}
