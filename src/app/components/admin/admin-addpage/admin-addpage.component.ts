import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { HotelServiceService } from 'src/app/services/hotel-service.service';
import { HotelModel } from 'src/app/models/hotel-model';

@Component({
  selector: 'app-admin-addpage',
  templateUrl: './admin-addpage.component.html',
  styleUrls: ['./admin-addpage.component.css']
})
export class AdminAddpageComponent {

  hotel: HotelModel = new HotelModel();

  constructor(
    private router: Router,
    private sharedService: SharedService,
    private hotelService: HotelServiceService
  ) { }

  addHotel() {
    this.hotelService.addHotel(this.hotel).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/admin/home']);
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    console.log(this.hotel);
    this.hotel.avgRating=3.5;
    this.hotel.userId=this.sharedService.getId();
    this.addHotel();
  }
}
