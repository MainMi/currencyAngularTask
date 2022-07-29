import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rates } from 'src/app/module/exchangeRates';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rates!: Rates[];

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.data.subscribe((value => this.rates = value['ratesData']
    ))
  }
  
  ngOnInit(): void {

  }

}
