import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent {
  hotel:any;
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
}];
}
}
