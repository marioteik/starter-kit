import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarRowComponent } from './avatar-row.component';

describe('AvatarRowComponent', () => {
  let component: AvatarRowComponent;
  let fixture: ComponentFixture<AvatarRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvatarRowComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
