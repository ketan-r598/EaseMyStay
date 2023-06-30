import { Component } from '@angular/core';
import { UserModel } from 'src/app/models/user-model';
import { UserCredentialsModel } from 'src/app/models/user-credentials-model';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})

export class RegisterLoginComponent {
  // signUpUsers: any[] = [];

  signUpObj: any = {
    firstName: '',
    lastName: '',
    contact: '',
    city: '',
    email: '',
    password: '',
    role: ''
  };

  loginObj: any = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {

    // const localData = localStorage.getItem('signUpUsers');
    // if (localData != null) {
    //   this.signUpUsers = JSON.parse(localData);
    // }

  }
  onSignUp() {
    // this.signUpUsers.push(this.signUpObj);
    // localStorage.setItem('signUpUsers', JSON.stringify(this.signUpUsers));
    // this.signUpObj = {
    //   firstName: '',
    //   lastName: '',
    //   contact: '',
    //   city: '',
    //   email: '',
    //   password: '',
    //   role: ''

    // };
  }

  onLogin() {

    // const isUserExist = this.signUpUsers.find(m => m.email == this.loginObj.email && m.password == this.loginObj.password);
    // if (isUserExist != undefined) {
    //   alert("login successfull");
    // }
    // else {
    //   alert("incorrect credentials");
    // }

  }
}
