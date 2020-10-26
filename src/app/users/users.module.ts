import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserEditComponent } from './users-list/user-edit/user-edit.component';
import { AgeClassificationPipe } from './users-list/age-classification.pipe';
import { UserFieldComponent } from './users-list/user-field/user-field.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [UsersComponent, UsersListComponent, UserFieldComponent, UserEditComponent, AgeClassificationPipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UsersRoutingModule],
})
export class UsersModule {}
