import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListExampleRoutingModule } from './list-example-routing.module';
import { ListExampleComponent } from './list-example.component';
import { ExampleService } from './example-service.service';
import { UseridComponent } from './userid/userid.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserTypeComponent } from './user-type/user-type.component'


@NgModule({
  declarations: [
    ListExampleComponent,
    UseridComponent,
    UserLoginComponent, 
    UserTypeComponent
  ],
  imports: [
    CommonModule,
    ListExampleRoutingModule,
  ],
  providers: [
    ExampleService
  ]
})
export class ListExampleModule { }
