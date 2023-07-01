import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user-model';
import { UserCredentialsModel } from '../models/user-credentials-model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseURL = "http://localhost:8800/users";

  constructor( private httpClient : HttpClient) { }

  registerUser(user:UserModel) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/register`,user);
  }

  updateUser(user:UserModel) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/update`,user);
  }

  loginUser(user:UserCredentialsModel) : Observable<UserModel> {
    return this.httpClient.post<UserModel>(`${this.baseURL}/login`,user);
  }

  // Needs to be Changed
  getUserById(id:number): Observable<UserModel> {
    return this.httpClient.get<UserModel>(`${this.baseURL}/${id}`);
  }

  deleteUser() : Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/delete`);
  }
}
