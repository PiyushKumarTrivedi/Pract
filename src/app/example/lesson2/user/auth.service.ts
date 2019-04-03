import { Injectable } from '@angular/core';
import { Iuser } from "./login";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

   
 
  CurrentUser:Iuser ;
  constructor() {
    this.CurrentUser ={
      id:1,
      firstName:"Piyush",
      lastName:"Trivedi",
      UserName:"test"
    }

  }

  loginUser(username:string,password:string)
  {
    this.CurrentUser ={
      id:1,
      firstName:"Piyush",
      lastName:"Trivedi",
      UserName:username
    }
    
  }

    IsAuthenticated()
    {
      return !!this.CurrentUser;
    }

    updateUser(firstName:string,lastName:string)
    {
      this.CurrentUser={
        id:1,
        firstName:firstName,
        lastName:lastName,
        UserName:firstName
      }
    }
    
}

