import { Component, OnInit } from '@angular/core';
import { Rates } from 'src/app/module/exchangeRates';
import { ExchangeRatesService } from 'src/app/service/exchangeRates/exchange-rates.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  rates!: Rates[];
  test = 0
  test2 = 0

  constructor(private exchangeRatesService: ExchangeRatesService) { 
  }

  ngOnInit(): void {
    this.exchangeRatesService.getRates().subscribe(
      (value) => this.rates = value
    )
  }
}
