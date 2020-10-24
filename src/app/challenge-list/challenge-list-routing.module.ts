import { FormResolver } from './guards/form.resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { FormListComponent } from './list-component/form-list/form-list.component';
import { ChallengeListComponent } from './challenge-list.component';

const routes: Routes = [
  {
    path: '',
    component: ChallengeListComponent,
    children: [{ path: ':id', component: FormListComponent, resolve: { user: FormResolver } }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ChallengeListRoutinModule {}
