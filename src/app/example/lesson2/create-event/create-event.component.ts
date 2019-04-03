import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../user/auth.service';
import { EventserviceService } from '../event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  isdirty:boolean = true;
  constructor(private route:Router,private event:EventserviceService) {
    
   }
   Cancel():void{
    this.route.navigate(['/Lesson2']);
   }
  ngOnInit() {
  }
  saveEvent(event)
  {
    this.event.saveEvent(event)
    this.route.navigate(['/Lesson2']);
    console.log(event);
  }

}
