import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesEstandarComponent } from './pipes-estandar.component';

describe('PipesEstandarComponent', () => {
  let component: PipesEstandarComponent;
  let fixture: ComponentFixture<PipesEstandarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipesEstandarComponent]
    });
    fixture = TestBed.createComponent(PipesEstandarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
