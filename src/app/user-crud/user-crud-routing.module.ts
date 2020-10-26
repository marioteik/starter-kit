import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserCrudComponent } from './user-crud.component';

const routes: Routes = [{ path: '', component: UserCrudComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserCrudRoutingModule {}
