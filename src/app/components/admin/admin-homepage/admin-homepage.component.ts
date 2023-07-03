import { Component } from '@angular/core';
import { HotelServiceService } from 'src/app/services/hotel-service.service';
import { HotelModel } from 'src/app/models/hotel-model';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent {

  hotels: any;
  // hotel: HotelModel = new HotelModel();
  hotelNumber:boolean=false;

  constructor(
    private hotelService: HotelServiceService,
    private router: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {

    this.getHotels();
  }

  private getHotels() {
    this.hotelService.getHotelByUserId(this.sharedService.getId()).subscribe(
      (data: any) => {
        console.log(data);
        this.hotels=data;
        console.log(this.hotels.length);
        if(this.hotels.length > 0){
          this.hotelNumber = true;
          console.log(this.hotels.length);
        }
        else{
          this.hotelNumber = false;
        }
      },

      error => {
        console.log(error);
      }
    );
  }

  getHotelDetail(id: number) {
    this.router.navigate(['admin/hoteldetail', id]);
  }

  updateHotelDetails(id: number) {
    this.router.navigate(['/admin/edithotel', id]);
  }

  deleteHotel(id: number) {
    this.hotelService.deleteHotel(id).subscribe(
      data => {
        console.log(data);
        this.getHotels();
      },
      error => {
        console.log(error);
      }
    );
  }
}
