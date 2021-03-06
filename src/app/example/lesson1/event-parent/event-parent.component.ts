import { Component, OnInit } from '@angular/core';
import { EventserviceService } from '../eventservice.service';

@Component({
  selector: 'app-event-parent',
  templateUrl: './event-parent.component.html',
  styleUrls: ['./event-parent.component.css']
})
export class EventParentComponent implements OnInit {
event:any[]
  //   events: any = [
  //   {name: 'Angular Connect', date: '9/26/2036', time: '10am', location: {address: '1 London Rd', city: 'London', country: 'England'}},
  //   {name: 'ng-nl', date: '4/15/2037', time: '9am', location: {address: '127 DT ', city: 'Amsterdam', country: 'NL'}},
  //   // tslint:disable-next-line:max-line-length
  //   {name: 'ng-conf 2037', date: '4/15/2037', time: '9am', location: {address: 'The Palatial America Hotel', city: 'Salt Lake City', country: 'USA'}},
  //   {name: 'UN Angular Summit', date: '6/10/2037', time: '8am', location: {address: 'The UN Angular Center', city: 'New York', country: 'USA'}},
  // ]  

  constructor(private eventservice: EventserviceService) {
    this.event = eventservice.getevent();
   }

  ngOnInit() {
  }
  
}
