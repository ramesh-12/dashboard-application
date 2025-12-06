import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassPercentageComponent } from './pass-percentage.component';

describe('PassPercentageComponent', () => {
  let component: PassPercentageComponent;
  let fixture: ComponentFixture<PassPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassPercentageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
