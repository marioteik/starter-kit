import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengeListRoutinModule } from './challenge-list-routing.module';
import { ChallengeListComponent } from './challenge-list.component';
import { ListComponent } from './list-component/list/list.component';
import { FormListComponent } from './list-component/form-list/form-list.component';

@NgModule({
  declarations: [ChallengeListComponent, ListComponent, FormListComponent],
  imports: [CommonModule, ChallengeListRoutinModule],
})
export class ChallengeListModule {}
