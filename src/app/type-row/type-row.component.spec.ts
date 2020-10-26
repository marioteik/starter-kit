import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeRowComponent } from './type-row.component';

describe('TypeRowComponent', () => {
  let component: TypeRowComponent;
  let fixture: ComponentFixture<TypeRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeRowComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
