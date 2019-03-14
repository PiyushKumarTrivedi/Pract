import { Injectable } from '@angular/core';
import { Iuser } from "./login";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userProfile:Iuser ;
  constructor() { }

  loginUser(username:string,password:string)
  {
    this.userProfile ={
      id:1,
      firstName:"Piyush",
      lastName:"Trivedi",
      UserName:"Piyush1"
    }
  }

    IsAuthenticated()
    {
      return !!this.userProfile;
    }
}

