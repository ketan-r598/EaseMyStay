import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HotelModel } from '../models/hotel-model';

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {

  private baseURL = "http://localhost:8800/hotels/owner";

  constructor(private httpClient: HttpClient) { }

  addHotel(hotel: HotelModel): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/addHotel`, hotel);
  }

  updateHotel(hotel:HotelModel) : Observable<Object>{
     return this.httpClient.put(`${this.baseURL}/updateHotel`,hotel);
  }

  deleteHotel(id:number) : Observable<Object>{
     return this.httpClient.delete(`${this.baseURL}/deleteHotel/${id}`);
  }

  getHotel(id:number) : Observable<Object>{
       return this.httpClient.get(`${this.baseURL}/getHotel/${id}`);
   }




}

