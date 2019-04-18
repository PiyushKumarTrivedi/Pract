import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { EventserviceService } from "../event.service";
import { ActivatedRoute } from "@angular/router";
import { Isession } from '../isession';
import { IEvent } from '../../interface/ievent';
 

@Component({
  selector: 'app-eventchild',
  templateUrl: './eventchild.component.html',
  styleUrls: ['./eventchild.component.css']
  
})
export class EventchildComponent implements OnInit {
  
  //@Output() sendSesionTOParent : new EventEmitter() 
  @Output() SaveNewSession = new EventEmitter();
 
  // @Input() inputchild: any[];
  @Input() inputchild1: IEvent[];

  c:IEvent[]=this.inputchild1;

   
  private addNewSession:boolean

  constructor(private service:EventserviceService, private route:ActivatedRoute) {
    
   }
   saveCrSessiontoChildSession(session:Isession)
   {
     alert(this.c);
    let eventID = Math.max.apply(null,this.c.sessions.map(s=>s.id));
    eventID = eventID+1; 
   }
  ngOnInit() {
    
    alert(this.c);
    //this.inputchild = this.service.geteventByid(+this.route.snapshot.params["id"]);
  }

  addSession()
  {
    
    alert(this.c);
    this.addNewSession= !this.addNewSession;
    
  }
}
