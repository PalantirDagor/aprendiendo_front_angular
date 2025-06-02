import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoEstadosComponent } from './manejo-estados.component';

describe('ManejoEstadosComponent', () => {
  let component: ManejoEstadosComponent;
  let fixture: ComponentFixture<ManejoEstadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManejoEstadosComponent]
    });
    fixture = TestBed.createComponent(ManejoEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
