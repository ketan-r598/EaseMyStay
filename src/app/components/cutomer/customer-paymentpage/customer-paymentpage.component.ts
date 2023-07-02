import { Component } from '@angular/core';
import { Payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment.service';
import { SharedService } from 'src/app/services/shared.service';
import { BookingService } from 'src/app/services/booking.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HotelServiceService } from 'src/app/services/hotel-service.service';

@Component({
  selector: 'app-customer-paymentpage',
  templateUrl: './customer-paymentpage.component.html',
  styleUrls: ['./customer-paymentpage.component.css']
})

export class CustomerPaymentpageComponent {

  payment: Payment = new Payment();
  hotelId:any;
  hotelName:any;
  booking:any;

  constructor(
    private router: Router,
    private sharedService: SharedService,
    private bookingService: BookingService,
    private hotelService:HotelServiceService,
    private paymentService:PaymentService,
    private route:ActivatedRoute

  ) { }

  ngOnInit() {
    this.payment.paymentDate = Date().toString().substring(4);
    this.payment.bookingId = this.route.snapshot.params['bookingId'];
    this.payment.userId = this.sharedService.getId();
    
    this.hotelId = this.route.snapshot.params['hotelId'];

    this.hotelService.getHotel(this.hotelId).subscribe(
      (data:any)=>{
        console.log(data);
        this.hotelName = data.hotelName;
      },
      (error) => {
        console.log(error);
      }
    );

    this.bookingService.getBooking(this.payment.bookingId).subscribe(
      (data:any) => {
        console.log(data);
        this.booking=data;
        this.payment.amount=data.amount;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    this.payment.paymentStatus="Confirmed";

    this.paymentService.addPayment(this.payment).subscribe(
      (data)=> {
        console.log(data);
        this.router.navigate(['/customer/home']);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}
