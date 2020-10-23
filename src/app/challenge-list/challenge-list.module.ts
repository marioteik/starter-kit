import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengeListRoutinModule } from './challenge-list-routing.module';
import { ChallengeListComponent } from './challenge-list.component';
import { ListComponent } from './list-component/list/list.component';

@NgModule({
  declarations: [ChallengeListComponent, ListComponent],
  imports: [CommonModule, ChallengeListRoutinModule],
})
export class ChallengeListModule {}
