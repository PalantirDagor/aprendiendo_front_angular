import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerComponentComponent } from './primer-component.component';

describe('PrimerComponentComponent', () => {
  let component: PrimerComponentComponent;
  let fixture: ComponentFixture<PrimerComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimerComponentComponent]
    });
    fixture = TestBed.createComponent(PrimerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
