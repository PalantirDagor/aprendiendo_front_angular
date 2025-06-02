import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposFormulariosComponent } from './tipos-formularios.component';

describe('TiposFormulariosComponent', () => {
  let component: TiposFormulariosComponent;
  let fixture: ComponentFixture<TiposFormulariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiposFormulariosComponent]
    });
    fixture = TestBed.createComponent(TiposFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
