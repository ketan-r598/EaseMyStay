import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-homepage',
  templateUrl: './customer-homepage.component.html',
  styleUrls: ['./customer-homepage.component.css']
})
export class CustomerHomepageComponent {
  hotel:any;
  bookings : any;
  ngOnInit(): void {
    this.hotel = [{
      "id":1,
      "hotelName":"ABC",
      "city":"Mumbai",
      "email":"hotel@abc.in"
    },
   { 
    "id":2,
    "hotelName":"MNO",
    "city":"Mysore",
    "email":"hotel@mno.in"
  },
  {
    "id":3,
    "hotelName":"XYZ",
    "city":"Bengaluru",
    "email":"hotel@xyz.in"
  },
  {
    "id":4,
    "hotelName":"taj",
    "city":"Bengaluru",
    "email":"hotel@xyz.in"
  },
  {
    "id":3,
    "hotelName":"mayura",
    "city":"Bengaluru",
    "email":"hotel@xyz.in"
  },
  {
    "id":3,
    "hotelName":"random",
    "city":"Bengaluru",
    "email":"hotel@xyz.in"
  },
  {
    "id":3,
    "hotelName":"random1",
    "city":"Bengaluru",
    "email":"hotel@xyz.in"
  }
];

  this.bookings = [{
    "bookingId":1,
    "hotelName":"ABC",
    "city":"Mumbai",
    "checkInDate":"01-07-2023",
    "checkOutDate":"06-07-2023",
    "amount":2000,
    "bookingStatus":"confirmed"
  },
  {
    "bookingId":2,
    "hotelName":"HKJ",
    "city":"Mumbai",
    "checkInDate":"03-07-2023",
    "checkOutDate":"06-07-2023",
    "amount":2200,
    "bookingStatus":"pending"
  },
  {
    "bookingId":3,
    "hotelName":"MNO",
    "city":"Bengaluru",
    "checkInDate":"24-06-2023",
    "checkOutDate":"06-07-2023",
    "amount":1400,
    "bookingStatus":"cancelled"
  },
  
  {
    "bookingId":4,
    "hotelName":"XYZ",
    "city":"Mysore",
    "checkInDate":"04-06-2023",
    "checkOutDate":"06-07-2023",
    "amount":900,
    "bookingStatus":"confirmed"
  },
  
  {
    "bookingId":4,
    "hotelName":"random",
    "city":"Mysore",
    "checkInDate":"04-06-2023",
    "checkOutDate":"06-07-2023",
    "amount":900,
    "bookingStatus":"confirmed"
  }
  
  
  

];
  }

}
