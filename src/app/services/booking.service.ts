import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseURL = "http://localhost:8800/bookings/customer";

  constructor(private httpClient: HttpClient) { }

  makeBooking(book: BookingService): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/makeBooking`,book);
}
  deleteBooking(bookingId:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/cancelBooking/${bookingId}`);
  }
}
