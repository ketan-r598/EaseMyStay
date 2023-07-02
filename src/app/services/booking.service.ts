import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseURL = "http://localhost:9960/bookings/customer";

  constructor(
    private httpClient: HttpClient,
    private sharedService: SharedService
  ) { }

  requestHeader = new HttpHeaders(
    {
      Authorization:`Bearer ${this.sharedService.getToken()}`
    }
  )

  makeBooking(book: Booking): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/makeBooking`, book,{ headers: this.requestHeader});
  }
  deleteBooking(bookingId: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/cancelBooking/${bookingId}`,{ headers: this.requestHeader});
  }

  getBooking(id: number): Observable<Object> {
    return this.httpClient.get(`${this.baseURL}/getBooking/${id}`,{ headers: this.requestHeader});
  }

  getBookingByUserId(userId: number): Observable<Booking[]> {
    return this.httpClient.get<Booking[]>(`${this.baseURL}/getBookingByUserId/${userId}`,{ headers: this.requestHeader});
  }
}
