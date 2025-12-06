import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerTotalComponent } from './learner-total.component';

describe('LearnerTotalComponent', () => {
  let component: LearnerTotalComponent;
  let fixture: ComponentFixture<LearnerTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnerTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnerTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
