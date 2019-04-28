import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Isession } from '../isession';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.css']
})
export class SessionDetailsComponent implements OnChanges {
   
@Input() childSessions :Isession[]
@Input() Filterby:string="all"
@Input()VisibleSession:Isession[];
  constructor() { }

  ngOnChanges() {
    if(this.childSessions!= null)
 this.FiltersessionByClick(this.Filterby);

 }

  private FiltersessionByClick(filter) {
    if (filter == "all") {
      this.VisibleSession = this.childSessions.slice(0);
    }
    else {
      this.VisibleSession= this.childSessions.filter(session => {
        return session.level === filter;
      });
      console.log(this.VisibleSession);
    }
  }
}
