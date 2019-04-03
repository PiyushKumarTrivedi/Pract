import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile2',
  templateUrl: './profile2.component.html',
  styleUrls: ['./profile2.component.css']
})
export class Profile2Component implements OnInit {

  profile2 :FormGroup
  private firstName :FormControl
  private lastName :FormControl
  constructor(public auth:AuthService,private route:Router) { 

   
  }

  ngOnInit() {
  
   this.firstName = new FormControl("",[Validators.required,Validators.pattern('[a-zA-Z].*')]);
   this.lastName = new FormControl("",[Validators.required,Validators.pattern('[a-zA-Z].*')]);
   this.profile2= new FormGroup({
     firstName:this.firstName,
     lastName:this.lastName
   })
   
  }
 Submit()
 {
   if(this.profile2.valid)
   {
     this.auth.updateUser(this.firstName.value,this.lastName.value)
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
 islastnameValidp()
 {
    if(this.lastName.touched && this.lastName.errors != null && this.lastName.errors.pattern)
    {
      return true;
    }
 }
}
