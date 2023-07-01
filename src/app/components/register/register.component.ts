import { Component } from '@angular/core';
import { UserModel } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user:UserModel = new UserModel();

  constructor(
    private userService:UserService,
    private router : Router
  ) {}
  

  registerUser() {
    this.userService.registerUser(this.user).subscribe(
      data => {
        console.log(data);
        alert("registerd Successfully");
        this.router.navigate(['/login']);
      
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    console.log()
  }
}
