import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';
import { SharedService } from './shared.service'


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseURL = "http://localhost:9940/payments/customer";

  constructor(
    private httpClient: HttpClient,
    private sharedService: SharedService
  ) { }

  requestHeader = new HttpHeaders(
    {
      Authorization: `Bearer ${this.sharedService.getToken()}`
    }
  )

  addPayment(payment: Payment): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/add`, payment, { headers: this.requestHeader });
  }

  deletePayment(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`, { headers: this.requestHeader });
  }

  getPayment(id: number): Observable<Object> {
    return this.httpClient.get(`${this.baseURL}/getPayment/${id}`, { headers: this.requestHeader });
  }

  getPaymentByUserId(userId: number): Observable<Object> {
    return this.httpClient.get(`${this.baseURL}/getPaymentByUserId/${userId}`, { headers: this.requestHeader });
  }
}
