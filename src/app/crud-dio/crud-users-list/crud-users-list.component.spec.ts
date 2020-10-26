import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUsersListComponent } from './crud-users-list.component';

describe('CrudUsersListComponent', () => {
  let component: CrudUsersListComponent;
  let fixture: ComponentFixture<CrudUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudUsersListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
