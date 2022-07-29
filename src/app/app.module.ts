import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ConvertMenuComponent } from './components/header/convert-menu/convert-menu.component';
import { RouterModule } from '@angular/router';
import { RatesResolveService } from './service/ratesResovle/rates-resolve.service';
import { MenuComponent } from './components/header/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConvertMenuComponent,
    MenuComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'exchange/menu', 
        component: MenuComponent, 
        resolve: {ratesData: RatesResolveService}
      },
      { 
        path: 'exchange/:currency', 
        component: ConvertMenuComponent, 
        resolve: {ratesData: RatesResolveService}
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
