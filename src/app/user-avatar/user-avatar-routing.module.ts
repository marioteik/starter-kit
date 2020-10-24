import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAvatarComponent } from './user-avatar.component';

const routes: Routes = [{ path: '', component: UserAvatarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAvatarRoutingModule {}
