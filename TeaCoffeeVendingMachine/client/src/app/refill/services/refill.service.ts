import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RefillService {
  constructor(private httpClient: HttpClient) {}

  orderRefill(refill: any): Observable<any> {
    return this.httpClient.post('api/refill', refill);
  }
}
