import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningOutcomeEditComponent } from './learning-outcome-edit.component';

describe('LearningOutcomeEditComponent', () => {
  let component: LearningOutcomeEditComponent;
  let fixture: ComponentFixture<LearningOutcomeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningOutcomeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningOutcomeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
