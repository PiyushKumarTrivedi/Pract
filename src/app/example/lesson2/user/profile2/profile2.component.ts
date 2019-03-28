import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile2',
  templateUrl: './profile2.component.html',
  styleUrls: ['./profile2.component.css']
})
export class Profile2Component implements OnInit {

  profile2 :FormGroup
  firstName :FormControl
  lastName :FormControl
  constructor(public auth:AuthService,private route:Router) { 

   
  }

  ngOnInit() {
  
   this.firstName = new FormControl();
   this.lastName = new FormControl();
   this.profile2= new FormGroup({
     firstName:this.firstName,
     lastName:this.lastName
   })
   
  }
 Submit(obj)
 {
   if(this.profile2.valid)
   {
     this.route.navigate(["Lesson2"]);
   }
 }


 isfirstnameValid()
 {
    if(this.firstName.touched && this.firstName.invalid)
    {
      return true;
    }
 }

 islastnameValid()
 {
    if(this.lastName.touched && this.lastName.invalid)
    {
      return true;
    }
 }
}
