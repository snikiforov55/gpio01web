import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpioModelComponent } from './gpio-model.component';

describe('GpioModelComponent', () => {
  let component: GpioModelComponent;
  let fixture: ComponentFixture<GpioModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpioModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpioModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
