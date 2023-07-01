import { Component } from '@angular/core';
import { UserModel } from 'src/app/models/user-model';
import { UserCredentialsModel } from 'src/app/models/user-credentials-model';
import { UserService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})

export class RegisterLoginComponent {
  // signUpUsers: any[] = [];

  // signUpObj: any = {
  //   firstName: '',
  //   lastName: '',
  //   contact: '',
  //   city: '',
  //   email: '',
  //   password: '',
  //   role: ''
  // };

  // loginObj: any = {
  //   email: '',
  //   password: ''
  // };

  // user: UserModel = new UserModel();

  constructor(private userService: UserService, private router: Router) { }

  userLogin: UserCredentialsModel = new UserCredentialsModel();
  userRegister: UserModel = new UserModel();
  // ngOnInit(): void {
  //   // const localData = localStorage.getItem('signUpUsers');
  //   // if (localData != null) {
  //   //   th

  // }

  onSignUp() {
    this.userService.registerUser(this.userRegister).subscribe(data => {
      console.log(data);
      alert("SigUp Successful");
      this.goToLoginPage();
    },
      error => console.log(error)
    );
  }

  onLogin() {

    this.userService.loginUser(this.userLogin).subscribe(data => {
      console.log(data);
      // this.user = data;
      if(data.role != null) {
        this.goToDashboard(data.role);
      } else {
        alert("invalid credentials");
      }
    },
      error => console.log(error)
    );

    // const isUserExist = this.signUpUsers.find(m => m.email == this.loginObj.email && m.password == this.loginObj.password);
    // if (isUserExist != undefined) {
    //   alert("login successfull");
    // }
    // else {
    //   alert("incorrect credentials");
    // }

  }

  private goToLoginPage() {
    this.router.navigate(['/registerLogin'])
  }

  private goToDashboard(role: String) {

    if (role == 'admin') {
      this.router.navigate(['/admin/home'])
    } else if (role == 'customer') {
      this.router.navigate(['/cutomer/home'])
    } else {
      console.log("Invalid role");
    }

  }
}
