import { Component } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { BookingService } from 'src/app/services/booking.service';
import { HotelServiceService } from 'src/app/services/hotel-service.service';


@Component({
  selector: 'app-customer-bookingpage',
  templateUrl: './customer-bookingpage.component.html',
  styleUrls: ['./customer-bookingpage.component.css']
})
export class CustomerBookingpageComponent {

  booking: Booking = new Booking();
  checkInDate: any;
  checkOutDate: any;
  hotelName:any;
  hotelId:any;
  bookingId:any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    
    this.hotelId = this.route.snapshot.params['hotelId'];
    this.booking.hotelId = this.hotelId;
    // console.log(this.route.snapshot.params['id']);
    this.booking.amount=Math.floor((Math.random())*2000);
  }

  onSubmit() {
    this.booking.checkInDate = this.checkInDate.toString();
    this.booking.checkOutDate = this.checkOutDate.toString();
    this.booking.userId = this.sharedService.getId();

    this.bookingService.makeBooking(this.booking).subscribe(
      (data: any) => {
        console.log(data);
        this.bookingId=data.bookingId;
        this.router.navigate(['/customer/payment',this.hotelId, this.bookingId]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}