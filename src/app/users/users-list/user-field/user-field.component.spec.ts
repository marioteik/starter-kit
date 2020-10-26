/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserFieldComponent } from './user-field.component';

describe('UserFieldComponent', () => {
  let component: UserFieldComponent;
  let fixture: ComponentFixture<UserFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserFieldComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
