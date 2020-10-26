import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubService } from './service/github.service';

import { GithubRoutingModule } from './github-routing.module';
import { GithubListComponent } from './github-list/github-list.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [GithubListComponent],
  imports: [CommonModule, GithubRoutingModule],
})
export class GithubModule {}
