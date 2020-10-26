import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { CardUserComponent } from './card-user/card-user.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '@app/@shared';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, FormsModule, UserRoutingModule, TranslateModule, SharedModule],
  declarations: [UserComponent, CardUserComponent],
})
export class UserModule {}
