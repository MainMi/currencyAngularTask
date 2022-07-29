import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Rates } from 'src/app/module/exchangeRates';
import { ExchangeRatesService } from '../exchangeRates/exchange-rates.service';

@Injectable({
  providedIn: 'root'
})
export class RatesResolveService implements Resolve<Rates[]>{

  constructor(private exchangeRatesService : ExchangeRatesService) { }

  resolve(): Rates[] | Observable<Rates[]> | Promise<Rates[]> {
    return this.exchangeRatesService.getRates()
  }
}
