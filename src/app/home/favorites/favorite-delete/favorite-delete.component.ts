import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { QuoteService } from '@app/services/quote.service';

@Component({
  selector: 'app-favorite-delete',
  templateUrl: './favorite-delete.component.html',
  styleUrls: ['./favorite-delete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteDeleteComponent implements OnInit {
  @Input() id: string;
  constructor(private quoteService: QuoteService) {}

  deleteFromFavorites() {
    this.quoteService.deleteFromFavorites(this.id);
  }

  ngOnInit(): void {}
}
