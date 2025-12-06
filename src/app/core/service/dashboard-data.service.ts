import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  constructor(private http: HttpClient) {}

  getDashboardData(year: number = 2024): Observable<any> {
    return this.http.get(`/assets/data/dashboard_${year}.json`);
  }
}
