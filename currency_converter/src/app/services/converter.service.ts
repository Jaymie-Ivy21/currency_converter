import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  private apiUrl = 'https://api.exchangerate-api.com/v4/latest/USD'; // API URL

  constructor(private http: HttpClient) { }

  getRates(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  convert(amount: number, fromRate: number, toRate: number): number {
    return amount * (toRate / fromRate);
  }
}
