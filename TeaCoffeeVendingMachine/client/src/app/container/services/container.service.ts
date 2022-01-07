import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContainerService {
  constructor(private httpClient: HttpClient) {}

  getContainer(): Observable<any> {
    // Get container values from database
    return this.httpClient.get('api/container');
  }
}
