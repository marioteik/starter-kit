import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { ListUserComponent } from '../list-user/list-user.component';
import { ListUserInfoComponent } from '../list-user-info/list-user-info.component';

const routes: Routes = [
  {
    path: '',
    component: ListUserComponent,
    data: {
      title: marker('List Users'),
    },
  },
  {
    path: ':id',
    component: ListUserInfoComponent,
    data: {
      title: marker('List Users Information'),
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ListUserRoutingModule {}
