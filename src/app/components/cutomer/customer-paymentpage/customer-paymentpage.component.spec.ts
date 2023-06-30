import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPaymentpageComponent } from './customer-paymentpage.component';

describe('CustomerPaymentpageComponent', () => {
  let component: CustomerPaymentpageComponent;
  let fixture: ComponentFixture<CustomerPaymentpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerPaymentpageComponent]
    });
    fixture = TestBed.createComponent(CustomerPaymentpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
