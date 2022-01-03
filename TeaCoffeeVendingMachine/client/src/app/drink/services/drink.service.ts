import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrinkService {
  constructor(private httpClient: HttpClient) {}

  chooseDrink(drink: any): Observable<any> {
    return this.httpClient.post('api/drink', drink);
  }
}
