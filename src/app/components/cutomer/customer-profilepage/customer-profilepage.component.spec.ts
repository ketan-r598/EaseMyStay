import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfilepageComponent } from './customer-profilepage.component';

describe('CustomerProfilepageComponent', () => {
  let component: CustomerProfilepageComponent;
  let fixture: ComponentFixture<CustomerProfilepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerProfilepageComponent]
    });
    fixture = TestBed.createComponent(CustomerProfilepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
