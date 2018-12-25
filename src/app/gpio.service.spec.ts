import { TestBed } from '@angular/core/testing';

import { GpioService } from './gpio.service';

describe('GpioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GpioService = TestBed.get(GpioService);
    expect(service).toBeTruthy();
  });
});
