import { ChallengeListRoutinModule } from './challenge-list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengeListComponent } from './challenge-list.component';

@NgModule({
  declarations: [ChallengeListComponent],
  imports: [CommonModule, ChallengeListRoutinModule],
})
export class ChallengeListModule {}
