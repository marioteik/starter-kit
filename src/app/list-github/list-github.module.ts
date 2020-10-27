import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListGithubRoutingModule } from './list-github-routing.module';
import { ListGithubComponent } from './list-github.component';

import { SharedModule } from '@shared';
import { AvatarRowComponent } from '../avatar-row/avatar-row.component';
import { LoginRowComponent } from '../login-row/login-row.component';
import { TypeRowComponent } from '../type-row/type-row.component';

@NgModule({
  declarations: [ListGithubComponent, AvatarRowComponent, LoginRowComponent, TypeRowComponent],
  imports: [CommonModule, ListGithubRoutingModule, SharedModule],
})
export class ListGithubModule {}
