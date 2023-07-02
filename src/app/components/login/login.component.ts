import { Component } from '@angular/core';
import { UserCredentialsModel } from 'src/app/models/user-credentials-model';
import { UserModel } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userCredentials: UserCredentialsModel = new UserCredentialsModel();
  user: UserModel = new UserModel();

  constructor(

    private userService: UserService,
    private router: Router,
    private sharedService : SharedService

  ) { }

  private login(loginForm:NgForm) {
    this.userService.loginUser(this.userCredentials).subscribe(
      (data: any) => {
        console.log(data);
        if (data != null) {
          // console.log(data.password);
          // console.log(data.role);
          // console.log(data.userEmail);
          // console.log(data.userId);
          // console.log(data.token);

          this.sharedService.setId(data.userId);
          this.sharedService.setEmail(data.email);
          this.sharedService.setPassword(data.password);
          this.sharedService.setRole(data.role);
          this.sharedService.setToken(data.token);

          alert("Login Successful");
          loginForm.reset();
          
          if(data.role === 'admin') {
            this.router.navigate(['/admin/home']);
          } else if(data.role === 'user') {
            this.router.navigate(['/customer/home']);
          } else {
            this.router.navigate(['/login']);
          }

        } else {
          alert("Login Unsuccessful..! Try Again");
          // this.router.navigate(['/login']);
          loginForm.reset();
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(loginForm:NgForm) {
    console.log(this.userCredentials);
    this.login(loginForm);
  }


}
