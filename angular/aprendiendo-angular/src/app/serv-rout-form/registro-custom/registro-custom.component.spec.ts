import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCustomComponent } from './registro-custom.component';

describe('RegistroCustomComponent', () => {
  let component: RegistroCustomComponent;
  let fixture: ComponentFixture<RegistroCustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroCustomComponent]
    });
    fixture = TestBed.createComponent(RegistroCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
