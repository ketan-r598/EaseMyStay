import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user-model';
import { UserCredentialsModel } from '../models/user-credentials-model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseURL = "http://localhost:9910/users";

  constructor( private httpClient : HttpClient) { }

  registerUser(user:UserModel) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/register`,user);
  }

  updateUser(user:UserModel) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/update`,user);
  }

  loginUser(user:UserCredentialsModel) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/login`,user);
  }

  // Needs to be Changed
  getUserById(id:number): Observable<UserModel> {
    return this.httpClient.get<UserModel>(`${this.baseURL}/getUser/${id}`);
  }

  deleteUser() : Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/delete`);
  }
}
