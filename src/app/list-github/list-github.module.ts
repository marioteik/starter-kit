import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListGithubRoutingModule } from './list-github-routing.module';
import { ListGithubComponent } from './list-github.component';

import { AvatarRowComponent } from '../avatar-row/avatar-row.component';

@NgModule({
  declarations: [ListGithubComponent, AvatarRowComponent],
  imports: [CommonModule, ListGithubRoutingModule],
})
export class ListGithubModule {}
