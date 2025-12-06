import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from "../../core/service/dashboard-data.service";

@Component({
  selector: 'app-dashboard-landing',
  templateUrl: './dashboard-landing.component.html',
  styleUrls: ['./dashboard-landing.component.scss']
})
export class DashboardLandingComponent implements OnInit {

  period = 'Monthly';
  selectedDistrict = 'All District';
  isDarkMode = false;

  dashboardData: any;

  districts = [
    'All District', 'Ariyulur', 'Chennai', 'Coimbatore', 'Cuddalore',
    'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi',
    'Karur', 'Madurai'
  ];

  constructor(private dataService: DashboardDataService) {}

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.body.classList.add('dark-theme');
    }

    this.loadData();
  }

  togglePeriod(type: string) {
    this.period = type;
  }

  onDistrictSelect(event: any) {
    this.selectedDistrict = event.target.value;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      console.log('if')
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      console.log('ELSE')
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }

  loadData(year: number = 2024) {
    this.dataService.getDashboardData(year).subscribe(res => {
      this.dashboardData = res;
      console.log("Loaded Dashboard Data:", this.dashboardData);
    });
  }
}
