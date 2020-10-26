import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDioComponent } from './crud-dio.component';

describe('CrudDioComponent', () => {
  let component: CrudDioComponent;
  let fixture: ComponentFixture<CrudDioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudDioComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
