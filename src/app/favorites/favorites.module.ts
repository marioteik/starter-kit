import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FavoritesRoutingModule],
  declarations: [FavoritesComponent],
})
export class FavoritesModule {}
