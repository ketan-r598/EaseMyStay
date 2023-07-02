import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseURL = "http://localhost:8800/payments/customer";

  constructor(private httpClient : HttpClient) { }

  addPayment(payment:Payment) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/add`,payment);
  }

  deletePayment(payment:Payment) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete`);
  }

}
