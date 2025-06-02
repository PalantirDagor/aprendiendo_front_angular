import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadAngularComponent } from './seguridad-angular.component';

describe('SeguridadAngularComponent', () => {
  let component: SeguridadAngularComponent;
  let fixture: ComponentFixture<SeguridadAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguridadAngularComponent]
    });
    fixture = TestBed.createComponent(SeguridadAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
