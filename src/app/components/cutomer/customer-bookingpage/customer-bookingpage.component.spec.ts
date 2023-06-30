import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBookingpageComponent } from './customer-bookingpage.component';

describe('CustomerBookingpageComponent', () => {
  let component: CustomerBookingpageComponent;
  let fixture: ComponentFixture<CustomerBookingpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerBookingpageComponent]
    });
    fixture = TestBed.createComponent(CustomerBookingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
