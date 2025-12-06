import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-district-ranking',
  templateUrl: './district-ranking.component.html',
  styleUrls: ['./district-ranking.component.scss']
})
export class DistrictRankingComponent implements OnInit {

  chartOptions: any;
  rawDistricts: any[] = [];

  rankBy: string = "enrollment";  // default sorting

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get<any>("assets/data/dashboard_2024.json").subscribe(res => {
      this.rawDistricts = res.districtRanking.districts;
      this.updateRank();
    });
  }

  updateRank() {
    const sorted = [...this.rawDistricts].sort((a, b) =>
      b[this.rankBy] - a[this.rankBy]
    );

    const categories: string[] = [];
    const enrollMale: number[] = [];
    const enrollFemale: number[] = [];
    const enrollOthers: number[] = [];
    const passData: number[] = [];
    const assessData: number[] = [];

    sorted.forEach(d => {

      categories.push(
        d.district + "_ENROLL",
        d.district + "_PASS",
        d.district + "_ASSESS"
      );

      // Enrollment stacked values
      enrollMale.push(d.male);
      enrollFemale.push(d.female);
      enrollOthers.push(d.others);

      // Pass
      passData.push(0);
      passData.push(d.passed);
      passData.push(0);

      // Assessment
      assessData.push(0);
      assessData.push(0);
      assessData.push(d.assessmentCompleted);
    });

    this.chartOptions = {
      series: [
        { name: "Male", data: enrollMale, stack: "enroll" },
        { name: "Female", data: enrollFemale, stack: "enroll" },
        { name: "Others", data: enrollOthers, stack: "enroll" },

        { name: "Passed", data: passData, stack: "pass" },

        { name: "Assessment Completed", data: assessData, stack: "assessment" }
      ],

      chart: {
        type: "bar",
        stacked: true,
        height: 450,
        toolbar: { show: false }
      },

      xaxis: {
        categories,
        labels: {
          rotate: -40,
          formatter: (val: string) => val.split("_")[0],   // ✔ show only district name
          style: { fontSize: "12px" }
        }
      },

      plotOptions: {
        bar: {
          columnWidth: "90%",       // ✔ remove space between 3 bars
          barGap: 0,
          barCategoryGap: 0
        }
      },

      legend: {
        position: "bottom",
        fontSize: "12px"
      },

      grid: {
        borderColor: "#cccccc"
      }
    };
  }

}
