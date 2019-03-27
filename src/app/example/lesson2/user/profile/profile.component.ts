import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {  AuthService} from "../auth.service";
import { RouteReuseStrategy, Router } from '@angular/router';
import { retry } from 'rxjs/operators';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public username:string;
  public password:string;
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
    
  }

  login(loginform:NgForm)
  {

    this.auth.loginUser(this.username,this.password);
    this.router.navigate(["Lesson2"]);
  }
  
  isFirstNameValid(loginform :NgForm)
  {
    if(loginform.controls.username.invalid  && loginform.controls.username.touched)
    {
      return false;
    }
  }
}
