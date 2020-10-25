import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Favorite } from '@app/types';

const routes = {
  quote: (c: RandomQuoteContext) => `/jokes/random?category=${c.category}`,
};

export interface RandomQuoteContext {
  // The quote's category: 'dev', 'explicit'...
  category: string;
}

const FAVORITES: Favorite[] = [];

@Injectable({
  providedIn: 'root',
  useFactory: (http: HttpClient) => new QuoteService(http),
  deps: [HttpClient],
})
export class QuoteService {
  constructor(private httpClient: HttpClient) {}

  getRandomQuote(context: RandomQuoteContext): Observable<string> {
    return this.httpClient.get(routes.quote(context)).pipe(
      map((body: any) => body.value),
      catchError(() => of('Error, could not load joke :-('))
    );
  }

  addToFavorites(quote: string) {
    const favorite = FAVORITES.find((f) => f.quote === quote);
    if (favorite) {
      favorite.rating += 1;
    } else {
      FAVORITES.push({
        quote,
        id: quote,
        rating: 0,
      });
    }
  }

  getFavorites() {
    return of(FAVORITES);
  }

  deleteFromFavorites(id: string) {
    console.log('delete do service');
    const i = FAVORITES.findIndex((f) => f.id === id);
    FAVORITES.splice(i, 1);
  }

  updateFavorite(id: string, newFavorite: Favorite) {
    console.log('updade do service');
    FAVORITES.forEach((favorite, i) => {
      if (favorite.id === id) FAVORITES[i] = newFavorite;
    });
  }
}
