import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventserviceService {

  constructor() { }

  getevent() {
      const subject = new Subject();

      setTimeout(() => {
        subject.next(events); subject.complete();
      }, 1000);
      return subject;
    }

    geteventByid(ID: number) {
        return events.find(e => e.id === ID);
      }

}

const events: any = [
  {id: 1, name: 'Angular Connect', imageUrl:'', date: '9/26/2036', time: '10am', location: {address: '1 London Rd', city: 'London', country: 'England'}},
  {id: 2, name: 'ng-nl', date: '4/15/2037', imageUrl:'', time: '9am', location: {address: '127 DT ', city: 'Amsterdam', country: 'NL'}},
  // tslint:disable-next-line:max-line-length
  { id: 3, name: 'ng-conf 2037', imageUrl:'', date: '4/15/2037', time: '9am', location: {address: 'The Palatial America Hotel', city: 'Salt Lake City', country: 'USA'}},
  {id: 4, name: 'UN Angular Summit', imageUrl:'', date: '6/10/2037', time: '8am', location: {address: 'The UN Angular Center', city: 'New York', country: 'USA'}},
];
