import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-rating',
  templateUrl: './favorite-rating.component.html',
  styleUrls: ['./favorite-rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteRatingComponent implements OnInit {
  @Input() rating: number;

  constructor() {}

  ngOnInit(): void {}
}
