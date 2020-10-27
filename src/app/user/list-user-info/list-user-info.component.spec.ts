import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserInfoComponent } from './list-user-info.component';

describe('ListUserInfoComponent', () => {
  let component: ListUserInfoComponent;
  let fixture: ComponentFixture<ListUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListUserInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
