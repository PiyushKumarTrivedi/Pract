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
 filterby :string ='all';
  // @Input() inputchild: any[];
  @Input() inputchild1: IEvent;

  c =this.inputchild1;

   
  public addNewSession:boolean

  constructor(private service:EventserviceService, private route:ActivatedRoute) {
    
   }
   saveCrSessiontoChildSession(session:Isession)
   {
      
    let SessionID = Math.max.apply(null,this.inputchild1.sessions.map(s=>s.id));
    session.id = SessionID+1; 
    this.inputchild1.sessions.push(session)
    this.service.updateIndex(this.inputchild1)
    this.addNewSession = false;
     
   }
  ngOnInit() {
    
    
    //this.inputchild = this.service.geteventByid(+this.route.snapshot.params["id"]);
  }

  addSession()
  {
    this.addNewSession= !this.addNewSession;
  }
}
