import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  public setRole(role: string) {
    localStorage.setItem("role", role);
  }

  public setToken(token: string) {
    localStorage.setItem("token", token);
  }

  public setId(id: string) {
    // let userid:number=parseInt(id);
    localStorage.setItem("userId", id);
  }

  public setEmail(email: string) {
    localStorage.setItem("email", email);
  }

  public setPassword(password: string) {
    localStorage.setItem("password", password);
  }


  public getRole(): string {
    return JSON.parse(localStorage.getItem("role") || '{}');
  }

  public getToken(): string {
    return JSON.parse(localStorage.getItem("token") || '{}');
  }

  public getId(): number {
    // let userid:number=parseInt(id);
    const userid: string = JSON.parse(localStorage.getItem("userId") || '{}');

    if (userid === '{}') {
      return -1;
    }

    return parseInt(userid);
  }

  public getEmail(): string {
    const email = JSON.parse(localStorage.getItem('email') || '{}');
    return email;
  }

  public getPassword(): string {
    return JSON.parse(localStorage.getItem("password") || '{}');
  }
}