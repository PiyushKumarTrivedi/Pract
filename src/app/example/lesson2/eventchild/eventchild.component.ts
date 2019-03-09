import { Component, OnInit, Input } from '@angular/core';
import { EventserviceService } from "../event.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-eventchild',
  templateUrl: './eventchild.component.html',
  styleUrls: ['./eventchild.component.css']
  
})
export class EventchildComponent implements OnInit {
 
  @Input() inputchild: any;
  @Input() inputchild1: any;

  constructor(private service:EventserviceService, private route:ActivatedRoute) {
    
   }

  ngOnInit() {
    //this.inputchild = this.service.geteventByid(+this.route.snapshot.params["id"]);
  }

}
