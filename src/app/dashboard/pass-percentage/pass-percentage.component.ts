import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pass-percentage',
  templateUrl: './pass-percentage.component.html',
  styleUrls: ['./pass-percentage.component.scss']
})
export class PassPercentageComponent implements OnInit {

  chartOptions: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.http.get<any>("assets/data/dashboard_2024.json").subscribe(res => {

      const stats = res.passStats;

      const labels = [
        "Overall Learners",
        "Assessment Taken",
        "Passed",
        "Failed"
      ];

      const values = [
        stats.overallLearners,
        stats.assessmentTaken,
        stats.passed,
        stats.failed
      ];

      this.chartOptions = {
        series: [
          {
            data: values
          }
        ],

        chart: {
          type: "bar",
          height: 350,
          fontFamily: "Roboto, sans-serif",
          toolbar: { show: false }
        },

        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "60%",
            borderRadius: 6
          }
        },

        dataLabels: {
          enabled: true,
          style: {
            fontFamily: "Roboto",
            fontSize: "12px"
          },
          formatter: (val: number) => val.toLocaleString()
        },

        xaxis: {
          categories: labels,
          labels: {
            style: {
              fontFamily: "Roboto",
              fontSize: "12px"
            },
            formatter: (val: number) => val.toLocaleString()
          }
        },

        grid: {
          borderColor: "#e0e0e0",
          strokeDashArray: 4
        },

        colors: ["#3498DB"],

        yaxis: {
          labels: {
            style: {
              fontFamily: "Roboto",
              fontSize: "14px",
            }
          }
        },

        tooltip: {
          y: {
            formatter: (val: number) => val.toLocaleString()
          }
        }
      };
    });
  }
}
