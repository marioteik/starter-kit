import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListGithubRoutingModule } from './list-github-routing.module';
import { ListGithubComponent } from './list-github.component';

@NgModule({
  declarations: [ListGithubComponent],
  imports: [CommonModule, ListGithubRoutingModule],
})
export class ListGithubModule {}
