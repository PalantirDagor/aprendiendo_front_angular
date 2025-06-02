import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduccionAngularComponent } from './introduccion-angular.component';

describe('IntroduccionAngularComponent', () => {
  let component: IntroduccionAngularComponent;
  let fixture: ComponentFixture<IntroduccionAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroduccionAngularComponent]
    });
    fixture = TestBed.createComponent(IntroduccionAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
