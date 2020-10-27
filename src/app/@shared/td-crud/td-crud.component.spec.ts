import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdCrudComponent } from './td-crud.component';

describe('TdCrudComponent', () => {
  let component: TdCrudComponent;
  let fixture: ComponentFixture<TdCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdCrudComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
