import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { CardComponent } from './card/card.component';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, CardComponent, AvatarComponent],
  exports: [LoaderComponent, CardComponent, AvatarComponent],
})
export class SharedModule {}
