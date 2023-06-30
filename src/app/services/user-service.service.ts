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

}
