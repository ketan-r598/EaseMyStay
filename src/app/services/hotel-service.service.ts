import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HotelModel } from '../models/hotel-model';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {

  private baseURL = "http://localhost:9950/hotels/owner";

  constructor(
    private httpClient: HttpClient,
    private sharedService:SharedService
    ) { }

    requestHeader = new HttpHeaders(
      {
        Authorization:`Bearer ${this.sharedService.getToken()}`
      }
    )

  addHotel(hotel: HotelModel): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/addHotel`, hotel,{ headers: this.requestHeader});
  }

  updateHotel(hotel: HotelModel): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/updateHotel`, hotel,{ headers: this.requestHeader});
  }

  deleteHotel(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`,{ headers: this.requestHeader});
  }

  getHotel(id: number): Observable<Object> {
    return this.httpClient.get(`${this.baseURL}/getHotel/${id}`,{ headers: this.requestHeader});
  }

  getHotelByUserId(id: number): Observable<Object> {
    return this.httpClient.get(`${this.baseURL}/getHotels/${id}`,{ headers: this.requestHeader});
  }
}

