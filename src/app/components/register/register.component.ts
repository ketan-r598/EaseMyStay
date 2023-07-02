import { Component } from '@angular/core';
import { UserModel } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user-service.service';
import { Route, Router } from '@angular/router';
import { Form, FormsModule, NgForm } from '@angular/forms';

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
    console.log(this.user);
    this.userService.registerUser(this.user).subscribe(
      data => {
        console.log(data);
        alert("registered Successfully");
        
        this.router.navigate(['/login']);
      
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    console.log(this.user);
    this.registerUser();
    // form.resetForm();
  }
}
