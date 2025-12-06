import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-assessment-score',
  templateUrl: './assessment-score.component.html',
  styleUrls: ['./assessment-score.component.scss']
})
export class AssessmentScoreComponent implements OnInit {

  chartOptions: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadChart();
  }

  loadChart() {
    this.http.get<any>("assets/data/dashboard_2024.json").subscribe(res => {

      const completed = res.assessmentCompletion.completedPercent;
      const notCompleted = res.assessmentCompletion.notCompletedPercent;

      this.chartOptions = {
        series: [completed, notCompleted],
        labels: ["Completed", "Not Completed"],

        chart: {
          type: "donut",
          fontFamily: "Roboto, sans-serif",
          height: 330
        },

        colors: ["#f4b371", "#6bd3ff"],

        legend: {
          position: "bottom",
          fontFamily: "Roboto"
        },

        dataLabels: {
          enabled: true,
          formatter: (val: number) => val.toFixed(0) + "%",
          style: {
            fontFamily: "Roboto",
            fontSize: "14px"
          }
        },

        plotOptions: {
          pie: {
            donut: {
              size: "65%",
              labels: {
                show: true,
                total: {
                  show: true,
                  label: "All Districts",
                  formatter: () => ""
                }
              }
            }
          }
        }
      };
    });
  }
}
