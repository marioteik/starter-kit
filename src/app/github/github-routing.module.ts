import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubListComponent } from './github-list/github-list.component';

const routes: Routes = [{ path: '', component: GithubListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GithubRoutingModule {}
