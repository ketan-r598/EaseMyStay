import { Component, OnInit } from '@angular/core';
import { HotelServiceService } from 'src/app/services/hotel-service.service';
import { HotelModel } from 'src/app/models/hotel-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-updatepage',
  templateUrl: './admin-updatepage.component.html',
  styleUrls: ['./admin-updatepage.component.css']
})

export class AdminUpdatepageComponent {

  id:number=0;
  hotel:HotelModel=new HotelModel();

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private hotelService:HotelServiceService
  ) {}


  ngOnInit() : void {
    this.id = this.route.snapshot.params['id'];

    this.hotelService.getHotel(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.hotel = data;
      },

      error => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    this.hotelService.updateHotel(this.hotel).subscribe(
      data=> {
        console.log(data);
        this.router.navigate(['/admin/home']);
      },

      error=>{
        console.log(error);
      }
    );
  }
}
