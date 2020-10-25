import { Component, OnInit } from '@angular/core';
import { QuoteService } from '@app/services/quote.service';
import { Favorite } from '@app/types';

import { environment } from '@env/environment';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favorites: Favorite[];
  isLoading = false;

  constructor(private quoteService: QuoteService) {
    console.log('instanciamento do componente favorites');
  }

  ngOnInit() {
    this.quoteService.getFavorites().subscribe((favorites: Favorite[]) => (this.favorites = favorites));
  }

  trackById(index: number, item: any) {
    if (item) return index;
  }

  deleteFromFavorites = this.quoteService.deleteFromFavorites;

  updateRating(favorite: Favorite, newRating: number) {
    this.quoteService.updateFavorite(favorite.id, {
      ...favorite,
      rating: newRating,
    });
  }
}
