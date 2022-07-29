import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rates } from 'src/app/module/exchangeRates';


@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  constructor(private httpClient: HttpClient) { }

  url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'

  getRates(): Observable<Rates[]>{
    return this.httpClient.get<Rates[]>(this.url)
  }
}
