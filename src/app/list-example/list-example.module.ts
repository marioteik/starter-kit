import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListExampleRoutingModule } from './list-example-routing.module';
import { ListExampleComponent } from './list-example.component';
import { ExampleService } from './example-service.service';
import { UserAvatarModule } from '../user-avatar/user-avatar.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListExampleComponent],
  imports: [CommonModule, ListExampleRoutingModule, UserAvatarModule, FormsModule],
  providers: [ExampleService],
})
export class ListExampleModule {}
