import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamRutasComponent } from './param-rutas.component';

describe('ParamRutasComponent', () => {
  let component: ParamRutasComponent;
  let fixture: ComponentFixture<ParamRutasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParamRutasComponent]
    });
    fixture = TestBed.createComponent(ParamRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
