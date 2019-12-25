import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningOutcomeAddComponent } from './learning-outcome-add.component';

describe('LearningOutcomeAddComponent', () => {
  let component: LearningOutcomeAddComponent;
  let fixture: ComponentFixture<LearningOutcomeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningOutcomeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningOutcomeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
