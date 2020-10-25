import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-quote',
  templateUrl: './favorite-quote.component.html',
  styleUrls: ['./favorite-quote.component.scss'],
})
export class FavoriteQuoteComponent implements OnInit {
  @Input() quote: string;

  constructor() {}

  ngOnInit(): void {}
}
