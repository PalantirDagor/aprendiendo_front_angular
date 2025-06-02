import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorReplaySubjectComponent } from './behavior-replay-subject.component';

describe('BehaviorReplaySubjectComponent', () => {
  let component: BehaviorReplaySubjectComponent;
  let fixture: ComponentFixture<BehaviorReplaySubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BehaviorReplaySubjectComponent]
    });
    fixture = TestBed.createComponent(BehaviorReplaySubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
