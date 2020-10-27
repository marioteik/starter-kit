import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from './pipe/replace.pipe';
import { fromEventPattern } from 'rxjs';

@NgModule({
  declarations: [UserComponent, UserInfoComponent, TruncatePipe],
  imports: [CommonModule, UserRoutingModule, FormsModule],
})
export class UserModule {}
