import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import { FavoriteQuoteComponent } from './favorite-quote/favorite-quote.component';
import { FavoriteRatingComponent } from './favorite-rating/favorite-rating.component';
import { FavoriteDeleteComponent } from './favorite-delete/favorite-delete.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FavoritesRoutingModule],
  declarations: [FavoritesComponent, FavoriteQuoteComponent, FavoriteRatingComponent, FavoriteDeleteComponent],
})
export class FavoritesModule {}
