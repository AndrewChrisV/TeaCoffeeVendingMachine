import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private httpClient: HttpClient) {}

  getCounter(): Observable<any> {
    return this.httpClient.get('api/counter');
  }

  getSalesAllDays(): Observable<any> {
    return this.httpClient.get('api/sales/all-days');
  }

  getSalesToday(): Observable<any> {
    return this.httpClient.get('api/sales/today');
  }
}
