import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaBComponent } from './vista-b.component';

describe('VistaBComponent', () => {
  let component: VistaBComponent;
  let fixture: ComponentFixture<VistaBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaBComponent]
    });
    fixture = TestBed.createComponent(VistaBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
