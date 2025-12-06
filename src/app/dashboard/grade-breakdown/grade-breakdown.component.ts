import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grade-breakdown',
  templateUrl: './grade-breakdown.component.html',
  styleUrls: ['./grade-breakdown.component.scss']
})
export class GradeBreakdownComponent implements OnInit {

  chartOptions: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadChart();
  }

  loadChart() {
    this.http.get<any>("assets/data/dashboard_2024.json").subscribe(res => {

      const labels = res.gradeBreakdown.map((d: any) => d.label);
      const percent = res.gradeBreakdown.map((d: any) => d.percent);

      const colors = ["#41a1d5", "#40c877", "#eab578", "#f48787", "#cff3ed"];
      this.chartOptions = {
        series: percent,
        labels: labels,

        chart: {
          type: "pie",
          height: 295,
          fontFamily: "Roboto, sans-serif"
        },

        colors: colors,

        legend: {
          position: "right",
          horizontalAlign: "left",
          fontFamily: "Roboto",
          fontSize: "14px",
          floating: false,
          markers: {
            width: 15,
            height: 15,
            radius: 5
          },
          itemMargin: {
            vertical: 10
          }
        },

        dataLabels: {
          enabled: true,
          formatter: (val: number) => val.toFixed(0) + "%",
          style: {
            fontFamily: "Roboto",
            fontSize: "13px"
          }
        },

        stroke: {
          width: 2,
          colors: ["#fff"]
        }
      };
    });
  }
}
