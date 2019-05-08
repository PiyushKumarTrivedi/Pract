import { Component, OnInit } from '@angular/core';
import { EventserviceService } from '../event.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
 
})
export class EventdetailsComponent implements OnInit {
  inputchild: any;

  constructor(private service:EventserviceService, private route:ActivatedRoute) {
  }
  ngOnInit() {
    this.route.params.forEach((params: Params)=>{
    this.inputchild = this.service.geteventByid(+params['id'])
    })
    //could not understand what is the difference between this(above) and this(below).
    //this.inputchild = this.service.geteventByid(+this.route.snapshot.params["id"]);
  }

}
