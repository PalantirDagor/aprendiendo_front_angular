import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServRoutFormComponent } from './serv-rout-form.component';

describe('ServRoutFormComponent', () => {
  let component: ServRoutFormComponent;
  let fixture: ComponentFixture<ServRoutFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServRoutFormComponent]
    });
    fixture = TestBed.createComponent(ServRoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
