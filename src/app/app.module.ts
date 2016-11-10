import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TimeComponent } from './time/time.component';
import { FooterComponent } from './footer/footer.component';
import { RollexComponent } from './rollex/rollex.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { LuckyPalaceComponent } from './lucky-palace/lucky-palace.component';
import { Scr888Component } from './scr888/scr888.component';
import { Play8oyComponent } from './play8oy/play8oy.component';
import { BankingComponent } from './banking/banking.component';
import { DownloadComponent } from './download/download.component';
import { SunCityComponent } from './sun-city/sun-city.component';
import { Win8Component } from './3win8/3win8.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimeComponent,
    FooterComponent,
    RollexComponent,
    HomeComponent,
    LuckyPalaceComponent,
    Scr888Component,
    Play8oyComponent,
    BankingComponent,
    DownloadComponent,
    SunCityComponent,
    Win8Component,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
