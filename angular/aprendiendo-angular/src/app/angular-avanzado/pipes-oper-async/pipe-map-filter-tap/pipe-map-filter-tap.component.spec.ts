import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeMapFilterTapComponent } from './pipe-map-filter-tap.component';

describe('PipeMapFilterTapComponent', () => {
  let component: PipeMapFilterTapComponent;
  let fixture: ComponentFixture<PipeMapFilterTapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipeMapFilterTapComponent]
    });
    fixture = TestBed.createComponent(PipeMapFilterTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
