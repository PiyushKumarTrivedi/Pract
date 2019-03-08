import { Component, OnInit, Input } from '@angular/core';
import { EventserviceService } from "../event.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-eventchild',
  templateUrl: './eventchild.component.html',
  styleUrls: ['./eventchild.component.css']
  
})
export class EventchildComponent implements OnInit {
 
  @Input() Inputevent: any;
  event: any;

  constructor(private service:EventserviceService, private route:ActivatedRoute) {
    
   }

  ngOnInit() {
  this.event = this.service.geteventByid(+this.route.snapshot.params["id"]);
  }

}
