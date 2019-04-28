import { Component, OnInit } from '@angular/core';
import { AuthService } from "../example/lesson2/user/auth.service";
import { EventserviceService, Isession } from '../example/lesson2/Indesx';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public SearchTerm:string='';
   FoundSession:any[];

  SearchSession(SearchTerm:string)
  {
   
   this.eventservice.getSessionMethod(SearchTerm).subscribe
   (sessions=>{
     //console.log("s: " +s);
     this.FoundSession=sessions;
     console.log(SearchTerm);
     console.log(this.FoundSession);
   });
   console.log("its hitting first here..looks like.");
   console.log(this.FoundSession);
  }

  constructor(public service:AuthService,private eventservice:EventserviceService) { }

  ngOnInit() {

  }

}
