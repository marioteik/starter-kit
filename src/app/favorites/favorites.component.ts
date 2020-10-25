import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  version: string | null = environment.version;
  favorites: Array<string> = [
    'Meu favorito numero 1',
    'Meu favorito numero 2',
    'Meu favorito numero 3',
    'Meu favorito numero 4',
  ];
  constructor() {}

  ngOnInit() {}

  trackById(index: number, item: any) {
    if (item) return index;
  }
}
