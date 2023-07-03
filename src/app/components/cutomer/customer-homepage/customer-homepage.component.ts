import { Component } from '@angular/core';
import { HotelModel } from 'src/app/models/hotel-model';
import { Booking } from 'src/app/models/booking';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { HotelServiceService } from 'src/app/services/hotel-service.service';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-customer-homepage',
  templateUrl: './customer-homepage.component.html',
  styleUrls: ['./customer-homepage.component.css']
})
export class CustomerHomepageComponent {
  hotel: any;
  bookings: any;
  city: any;
  hotelName: any;
  hotelNumber:boolean=false;
  bookingsNumber:boolean=false;

  constructor(
    private router: Router,
    private sharedService: SharedService,
    private hotelService: HotelServiceService,
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {
    const userId = this.sharedService.getId();

    this.bookingService.getBookingByUserId(userId).subscribe(
      (data) => {
        console.log(data);
        this.bookings = data;
        if(this.hotel.length > 0){
          this.hotelNumber = true;
          console.log(this.hotelNumber);
        }else{
          this.hotelNumber = false;
        }
        if(this.bookings.length > 0){
          this.bookingsNumber = true;
          console.log(this.bookingsNumber);
        }
        else{
          this.bookingsNumber = false;
        }
      },
      error => {
        console.log(error);
      }
    );

    // for (let b of this.bookings) {
    //   this.hotelService.getHotel(b.hotelId).subscribe(
    //     (data: any) => {
    //       console.log(data);
    //       this.hotelName = data.hotelName;
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    // }
    // // this.city = '';
    // // this.hotelService.getHotelByCity(this.city).subscribe(
    // //   (data) => {
    // //     console.log(data);
    // //     this.hotel = data;
    // //   },
    // //   error => {
    // //     console.log(error);
    // //   }
    // // );
  }

  search() {
    this.hotelService.getHotelByCity(this.city).subscribe(
      (data: any) => {
        console.log(data);
        this.hotel = data;
      },
      error => {
        console.log(error);
      }
    );
  }


  book(hotelId: number) {
    console.log(hotelId);
    this.router.navigate(['/customer/booking', hotelId]);
  }










  // this.hotel = [{
  //   "id": 1,
  //   "hotelName": "ABC",
  //   "city": "Mumbai",
  //   "email": "hotel@abc.in"
  // },
  // {
  //   "id": 2,
  //   "hotelName": "MNO",
  //   "city": "Mysore",
  //   "email": "hotel@mno.in"
  // },
  // {
  //   "id": 3,
  //   "hotelName": "XYZ",
  //   "city": "Bengaluru",
  //   "email": "hotel@xyz.in"
  // },
  // {
  //   "id": 4,
  //   "hotelName": "taj",
  //   "city": "Bengaluru",
  //   "email": "hotel@xyz.in"
  // },
  // {
  //   "id": 3,
  //   "hotelName": "mayura",
  //   "city": "Bengaluru",
  //   "email": "hotel@xyz.in"
  // },
  // {
  //   "id": 3,
  //   "hotelName": "random",
  //   "city": "Bengaluru",
  //   "email": "hotel@xyz.in"
  // },
  // {
  //   "id": 3,
  //   "hotelName": "random1",
  //   "city": "Bengaluru",
  //   "email": "hotel@xyz.in"
  // }
  // ];

  // this.bookings = [{
  //   "bookingId": 1,
  //   "hotelName": "ABC",
  //   "city": "Mumbai",
  //   "checkInDate": "01-07-2023",
  //   "checkOutDate": "06-07-2023",
  //   "amount": 2000,
  //   "bookingStatus": "confirmed"
  // },
  // {
  //   "bookingId": 2,
  //   "hotelName": "HKJ",
  //   "city": "Mumbai",
  //   "checkInDate": "03-07-2023",
  //   "checkOutDate": "06-07-2023",
  //   "amount": 2200,
  //   "bookingStatus": "pending"
  // },
  // {
  //   "bookingId": 3,
  //   "hotelName": "MNO",
  //   "city": "Bengaluru",
  //   "checkInDate": "24-06-2023",
  //   "checkOutDate": "06-07-2023",
  //   "amount": 1400,
  //   "bookingStatus": "cancelled"
  // },

  // {
  //   "bookingId": 4,
  //   "hotelName": "XYZ",
  //   "city": "Mysore",
  //   "checkInDate": "04-06-2023",
  //   "checkOutDate": "06-07-2023",
  //   "amount": 900,
  //   "bookingStatus": "confirmed"
  // },

  // {
  //   "bookingId": 4,
  //   "hotelName": "random",
  //   "city": "Mysore",
  //   "checkInDate": "04-06-2023",
  //   "checkOutDate": "06-07-2023",
  //   "amount": 900,
  //   "bookingStatus": "confirmed"
  // }
  // ];
}
