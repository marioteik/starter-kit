import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudDioComponent } from './crud-dio.component';

const routes: Routes = [{ path: '', component: CrudDioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudDioRoutingModule {}
