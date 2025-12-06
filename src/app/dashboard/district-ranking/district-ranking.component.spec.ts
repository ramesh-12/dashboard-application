import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictRankingComponent } from './district-ranking.component';

describe('DistrictRankingComponent', () => {
  let component: DistrictRankingComponent;
  let fixture: ComponentFixture<DistrictRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictRankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
