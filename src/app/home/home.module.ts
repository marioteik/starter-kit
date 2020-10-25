import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FavoriteQuoteComponent } from './favorites/favorite-quote/favorite-quote.component';
import { FavoriteRatingComponent } from './favorites/favorite-rating/favorite-rating.component';
import { FavoriteDeleteComponent } from './favorites/favorite-delete/favorite-delete.component';
import { LocalDateTimePipe } from '../pipes/local-date-time.pipe';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, HomeRoutingModule],
  declarations: [
    HomeComponent,
    FavoritesComponent,
    FavoriteQuoteComponent,
    FavoriteRatingComponent,
    FavoriteDeleteComponent,
    LocalDateTimePipe,
  ],
})
export class HomeModule {}
