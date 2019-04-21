import { Component, OnInit } from '@angular/core';
import { EventserviceService } from '../event.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Isession } from '../isession';
import { IEvent } from '../../interface/ievent';

@Component({
  selector: 'app-eventparent',
  templateUrl: './eventparent.component.html',
  styleUrls: ['./eventparent.component.css']
})
export class EventparentComponent implements OnInit {
  Parentevent: IEvent;

  constructor(private service: EventserviceService, private route: Router,private activateroute: ActivatedRoute) { }

  ngOnInit() {
    //  this.service.getevent().subscribe(e => {this.Parentevent = e;});
    this.Parentevent = this.activateroute.snapshot.data['resolveparent'];
  }
  CreateNewEvent(): void {
    this.route.navigate(['/Create']);
  }
  SaveSession(session:Isession):void{
 const nextId = Math.max.apply(null,this.Parentevent.sessions.map(x=>x.id))+1;
 session.id=nextId;
 this.Parentevent.sessions.push(session);
 this.service.updateIndex(this.Parentevent);
 console.log(this.Parentevent);
 
  }
}
