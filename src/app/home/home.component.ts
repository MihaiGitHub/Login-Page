import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router, private userService : UserService, private userProfile : User) { }

  ngOnInit() {
    this.userService.getUser().subscribe((data : any) => {  // Get user profile and storing it in User model
      this.userProfile = data;
    });
  }

  Logout(){  // Delete JWT on logout
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

}
