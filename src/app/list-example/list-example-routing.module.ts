import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListExampleComponent } from './list-example.component';
import { UserComponent } from './user/user.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

const routes: Routes = [
  {
    path: '',
    component: ListExampleComponent,
  },
  {
    path: 'user/new',
    component: UserComponent,
    data: { title: 'New User' },
  },
  {
    path: 'user/:id/edit',
    component: UserComponent,
    data: { title: 'Edit User' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListExampleRoutingModule {}
