import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningOutcomeListComponent } from './learning-outcome-list.component';

describe('LearningOutcomeListComponent', () => {
  let component: LearningOutcomeListComponent;
  let fixture: ComponentFixture<LearningOutcomeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningOutcomeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningOutcomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
