import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesOperAsyncComponent } from './pipes-oper-async.component';

describe('PipesEstandarComponent', () => {
  let component: PipesOperAsyncComponent;
  let fixture: ComponentFixture<PipesOperAsyncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipesOperAsyncComponent]
    });
    fixture = TestBed.createComponent(PipesOperAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
