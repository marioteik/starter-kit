import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteRatingComponent } from './favorite-rating.component';

describe('FavoriteRatingComponent', () => {
  let component: FavoriteRatingComponent;
  let fixture: ComponentFixture<FavoriteRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoriteRatingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
