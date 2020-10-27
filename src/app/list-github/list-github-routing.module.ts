import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListGithubComponent } from './list-github.component';

const routes: Routes = [{ path: '', component: ListGithubComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListGithubRoutingModule {}
