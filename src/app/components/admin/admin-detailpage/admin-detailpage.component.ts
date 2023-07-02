import { Component } from '@angular/core';
import { HotelModel } from 'src/app/models/hotel-model';
import { HotelServiceService } from 'src/app/services/hotel-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-detailpage',
  templateUrl: './admin-detailpage.component.html',
  styleUrls: ['./admin-detailpage.component.css']
})
export class AdminDetailpageComponent {

  id:number=0;
  hotel:any;

  constructor(
    private route:ActivatedRoute,
    private hotelService : HotelServiceService
  ) {}

  ngOnInit():void {
    this.id= this.route.snapshot.params['id'];
    this.hotel=new HotelModel();
    this.hotelService.getHotel(this.id).subscribe(
      data=>{
        console.log(data);
        this.hotel=data;
      },

      error=>{
        console.log(error);
      }
    );
  }
}