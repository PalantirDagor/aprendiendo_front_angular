import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAvanzadoComponent } from './angular-avanzado.component';

describe('AngularAvanzadoComponent', () => {
  let component: AngularAvanzadoComponent;
  let fixture: ComponentFixture<AngularAvanzadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularAvanzadoComponent]
    });
    fixture = TestBed.createComponent(AngularAvanzadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
