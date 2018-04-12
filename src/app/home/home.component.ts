import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userProfile : any;

  constructor(private router : Router, private userService : UserService) { }

  ngOnInit() {
    /* this.userService.getUser().subscribe((data : any) => {
      this.userProfile = data;
    }); */
  }

  Logout(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

}
