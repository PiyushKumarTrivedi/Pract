import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {  AuthService} from "../auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public username:string;
  public password:string;
  constructor(private auth:AuthService) { }

  ngOnInit() {
    
  }

  login(loginform:NgForm)
  {
    this.auth.loginUser(this.username,this.password);
  }
  
  
}
