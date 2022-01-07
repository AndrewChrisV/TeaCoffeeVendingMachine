import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private httpClient: HttpClient) {}

  // Get refilling counter details from database
  getCounter(): Observable<any> {
    return this.httpClient.get('api/counter');
  }

  // Get total sales for all days from database
  getSalesAllDays(): Observable<any> {
    return this.httpClient.get('api/sales/all-days');
  }

  // Get total sales for today from database
  getSalesToday(): Observable<any> {
    return this.httpClient.get('api/sales/today');
  }
}
