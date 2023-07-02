import { Component } from '@angular/core';
import { UserModel } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-customer-profilepage',
  templateUrl: './customer-profilepage.component.html',
  styleUrls: ['./customer-profilepage.component.css']
})
export class CustomerProfilepageComponent {

  user:UserModel = new UserModel();

  constructor(
    private userService:UserService,
    private router:Router,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.userService.getUserById(this.sharedService.getId()).subscribe(
      (data) => {
        this.user=data;
      },
      (error) => {
        console.log(error);
      }
    );
  }


  onSubmit() {
    this.userService.updateUser(this.user).subscribe(
      (data) => {
        console.log(data);
        alert("Updated Succeessfully!");
        this.router.navigate(['/customer/home']);
      },

      (error) => {
        console.log(error);
      }
    );
  }
}
