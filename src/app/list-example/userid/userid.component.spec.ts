import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseridComponent } from './userid.component';

describe('UseridComponent', () => {
  let component: UseridComponent;
  let fixture: ComponentFixture<UseridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
