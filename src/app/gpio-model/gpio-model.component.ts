import { Component, OnInit } from '@angular/core';

import { GpioService } from '../gpio.service';
import {Gpio} from '../gpio';

@Component({
  selector: 'app-gpio-model',
  templateUrl: './gpio-model.component.html',
  styleUrls: ['./gpio-model.component.css']
})
export class GpioModelComponent implements OnInit {
  gpio : Gpio;
  constructor(private gpioService: GpioService) { }

  ngOnInit() {
    this.getGpio();
  }
  getGpio() : void{
    this.gpioService.getGpio()
        .subscribe(g => {this.gpio = g});
    console.log("got gpio: " + this.gpio);
  }
  refresh() : void{
    this.getGpio();
  }
}
