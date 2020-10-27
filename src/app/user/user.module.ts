import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { ListUserRoutingModule } from '../user/list-user/list-user-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import { ListUserInfoComponent } from './list-user-info/list-user-info.component';
import { DataUserComponent } from './data-user/data-user.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FormsModule, ListUserRoutingModule],
  declarations: [ListUserComponent, ListUserInfoComponent, DataUserComponent],
})
export class UserModule {}
