import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteQuoteComponent } from './favorite-quote.component';

describe('FavoriteQuoteComponent', () => {
  let component: FavoriteQuoteComponent;
  let fixture: ComponentFixture<FavoriteQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoriteQuoteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
