import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GpioModelComponent } from './gpio-model/gpio-model.component';
import {GpioService } from './gpio.service'


@NgModule({
  declarations: [
    AppComponent,
    GpioModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GpioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
