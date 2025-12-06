import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-learner-total',
  templateUrl: './learner-total.component.html',
  styleUrls: ['./learner-total.component.scss']
})
export class LearnerTotalComponent {
  @Input() summary: any;
  kpiData: any[] = [];

  ngOnChanges() {
    if (this.summary) {
      this.kpiData = [
        { label: 'Total Learner enrolled', value: this.summary.totalLearners, icon: '', color: 'black', nextColor: 'male' },
        { label: 'Male', value: this.summary.male, icon: 'fa-male', color: 'male', nextColor: 'female' },
        { label: 'Female', value: this.summary.female, icon: 'fa-female', color: 'female', nextColor: 'others' },
        { label: 'Others', value: this.summary.others, icon: 'fa-users', color: 'others', nextColor: 'active' },
        { label: 'Active Learners', value: this.summary.activeLearners, icon: '', color: 'active', nextColor: 'engaged' },
        { label: 'Engaged Learners', value: this.summary.engagedLearners, icon: '', color: 'engaged', nextColor: null }
      ];
    }
  }

}
