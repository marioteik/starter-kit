import { FormResolver } from './guards/form.resolver';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengeListRoutinModule } from './challenge-list-routing.module';
import { ChallengeListComponent } from './challenge-list.component';
import { ListComponent } from './list-component/list/list.component';
import { FormListComponent } from './list-component/form-list/form-list.component';
import { ListPipePipe } from './pipe/list-pipe.pipe';

@NgModule({
  declarations: [ChallengeListComponent, ListComponent, FormListComponent, ListPipePipe],
  imports: [CommonModule, ChallengeListRoutinModule, FormsModule],
  providers: [FormResolver],
})
export class ChallengeListModule {}
