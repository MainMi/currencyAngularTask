import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Rates } from 'src/app/module/exchangeRates';

@Component({
  selector: 'app-convert-menu',
  templateUrl: './convert-menu.component.html',
  styleUrls: ['./convert-menu.component.css']
})
export class ConvertMenuComponent implements OnInit{

  currencyUAN = new FormControl
  currencyAnother = new FormControl
  currentlyUAN = 0
  currentlyAnother = 0
  ratesForm = new FormGroup({
    currencyUAN: this.currencyUAN,
    currencyAnother: this.currencyAnother
  })

  rates!: Rates[];
  rate!: Rates;

  convertCurrency() {
    this.currentlyUAN = +this.currencyAnother.value * +this.rate.sale
    this.currentlyAnother = +this.currencyUAN.value / +this.rate.sale
    this.currentlyUAN = +this.currentlyUAN.toFixed(5)
    this.currentlyAnother = +this.currentlyAnother.toFixed(5)
  }

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.data.subscribe((value => this.rates = value['ratesData']
    ))
    this.activatedRoute.params.subscribe((params) => {
      this.currentlyUAN = 0
      this.currentlyAnother = 0
      this.rate = this.rates.find((value) => value.ccy == params['currency']) as Rates
    })
  }
  ngOnInit(): void {
    
  }

}
