import { Injectable } from '@angular/core';
import { Iuser } from "./login";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  CurrentUser:Iuser ;
  constructor() { }

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
}

