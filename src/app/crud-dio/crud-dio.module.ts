import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudDioRoutingModule } from './crud-dio-routing.module';
import { CrudDioComponent } from './crud-dio.component';
import { CrudUsersListComponent } from './crud-users-list/crud-users-list.component';
import { CrudEditFormComponent } from './crud-edit-form/crud-edit-form.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from './pipe/pipes.module';

@NgModule({
  declarations: [CrudDioComponent, CrudUsersListComponent, CrudEditFormComponent],
  imports: [CommonModule, CrudDioRoutingModule, FormsModule, PipesModule],
})
export class CrudDioModule {}
