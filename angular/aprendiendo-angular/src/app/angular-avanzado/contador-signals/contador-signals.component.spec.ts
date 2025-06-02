import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorSignalsComponent } from './contador-signals.component';

describe('ContadorSignalsComponent', () => {
  let component: ContadorSignalsComponent;
  let fixture: ComponentFixture<ContadorSignalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContadorSignalsComponent]
    });
    fixture = TestBed.createComponent(ContadorSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
