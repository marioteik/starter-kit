import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleService } from './services/example.service';
import { ListExampleRoutingModule } from './list-example-routing.module';
import { ListExampleComponent } from './list-example.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/@shared';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ListExampleComponent, UserComponent],
  imports: [CommonModule, TranslateModule, SharedModule, ListExampleRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ExampleService],
})
export class ListExampleModule {}
