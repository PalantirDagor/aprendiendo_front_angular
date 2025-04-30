import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingDirectivasComponent } from './data-binding-directivas.component';

describe('DataBindingDirectivasComponent', () => {
  let component: DataBindingDirectivasComponent;
  let fixture: ComponentFixture<DataBindingDirectivasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataBindingDirectivasComponent]
    });
    fixture = TestBed.createComponent(DataBindingDirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
