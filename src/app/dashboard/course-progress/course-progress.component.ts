import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-progress',
  templateUrl: './course-progress.component.html',
  styleUrls: ['./course-progress.component.scss']
})
export class CourseProgressComponent implements OnInit {

  chartOptions: any;

  isDark = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.detectTheme();
    this.loadData();
  }

  // 🔥 Detect dark/light mode dynamically
  detectTheme() {
    const body = document.body.classList;
    this.isDark = body.contains('dark-theme');  // Change based on your theme class
  }

  loadData() {
    this.http.get<any>("assets/data/dashboard_2024.json").subscribe(res => {

      const districts = res.courseProgress.map((d: any) => d.district);
      const goodPercent = res.courseProgress.map((d: any) => d.good);

      const barColors = goodPercent.map((value: number) => {
        if (value < 40) return "#FF4C4C";      // red
        if (value < 70) return "#2ECC71";      // green
        return "#3498DB";                      // blue
      });

      // 🎨 THEME BASED COLORS
      const textColor  = this.isDark ? "#ffffff" : "#000000";
      const gridColor  = this.isDark ? "#555555" : "#e0e0e0";
      const axisColor  = this.isDark ? "#ffffff" : "#757575";

      this.chartOptions = {
        series: [
          {
            name: "Course Progress %",
            data: goodPercent
          }
        ],

        chart: {
          type: "bar",
          height: 350,
          fontFamily: "Roboto, sans-serif",
          toolbar: { show: false }
        },

        legend: {enabled: false},

        xaxis: {
          categories: districts,
          title: {
            text: "District",
            style: {
              fontFamily: "Roboto",
              fontSize: "14px",
              color: textColor
            }
          },
          labels: {
            style: {
              fontFamily: "Roboto",
              fontSize: "12px",
              color: textColor
            }
          }
        },

        yaxis: {
          min: 0,
          max: 100,
          tickAmount: 10,
          labels: {
            formatter: (val: number) => val,
            style: {
              fontFamily: "Roboto",
              color: textColor
            }
          },
          title: {
            text: "Course Progress %",
            style: {
              fontFamily: "Roboto",
              fontSize: "14px",
              color: textColor
            }
          },
          axisBorder: {
            show: true,
            color: axisColor, // ← THEME BASED COLOR
            width: 2
          }
        },

        grid: {
          show: true,
          borderColor: gridColor,
          strokeDashArray: 4,

          xaxis: {
            lines: { show: false }
          },
          yaxis: {
            lines: { show: true }
          }
        },

        plotOptions: {
          bar: {
            distributed: true,
            borderRadius: 0,
            columnWidth: "60%"
          }
        },

        colors: barColors,

        dataLabels: {
          enabled: true,
          style: {
            fontFamily: "Roboto",
            fontSize: "12px",
            color: textColor
          },
          formatter: (val: number) => val + "%"
        },

        stroke: {
          show: true,
          width: 1,
          colors: ["#fff"]
        },
      };
    });
  }
}
