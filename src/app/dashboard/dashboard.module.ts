import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {DashboardLandingComponent} from "./dashboard-landing/dashboard-landing.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LearnerTotalComponent} from "./learner-total/learner-total.component";
import { CourseProgressComponent } from './course-progress/course-progress.component';
import {MatCardModule} from "@angular/material/card";
import {NgApexchartsModule} from "ng-apexcharts";
import { PassPercentageComponent } from './pass-percentage/pass-percentage.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { AssessmentScoreComponent } from './assessment-score/assessment-score.component';
import { DistrictRankingComponent } from './district-ranking/district-ranking.component';
import { GradeBreakdownComponent } from './grade-breakdown/grade-breakdown.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    DashboardLandingComponent,
    LearnerTotalComponent,
    CourseProgressComponent,
    PassPercentageComponent,
    AssessmentScoreComponent,
    DistrictRankingComponent,
    GradeBreakdownComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    NgApexchartsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class DashboardModule { }
