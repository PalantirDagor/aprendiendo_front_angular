import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasEstructComponent } from './directivas-estruct.component';

describe('DirectivasEstructComponent', () => {
  let component: DirectivasEstructComponent;
  let fixture: ComponentFixture<DirectivasEstructComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivasEstructComponent]
    });
    fixture = TestBed.createComponent(DirectivasEstructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
