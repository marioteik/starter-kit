import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRowComponent } from './login-row.component';

describe('LoginRowComponent', () => {
  let component: LoginRowComponent;
  let fixture: ComponentFixture<LoginRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginRowComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
