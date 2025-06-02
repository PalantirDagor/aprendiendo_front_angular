import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPipePersonalizadoComponent } from './mi-pipe-personalizado.component';

describe('MiPipePersonalizadoComponent', () => {
  let component: MiPipePersonalizadoComponent;
  let fixture: ComponentFixture<MiPipePersonalizadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiPipePersonalizadoComponent]
    });
    fixture = TestBed.createComponent(MiPipePersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
