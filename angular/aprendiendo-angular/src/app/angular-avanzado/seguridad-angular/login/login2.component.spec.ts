import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login2Component } from './login2.component';

describe('LoginComponent', () => {
  let component: Login2Component;
  let fixture: ComponentFixture<Login2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Login2Component]
    });
    fixture = TestBed.createComponent(Login2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
