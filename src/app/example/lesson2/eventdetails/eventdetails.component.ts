import { Component, OnInit } from '@angular/core';
import { EventserviceService } from '../event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css']
})
export class EventdetailsComponent implements OnInit {
  inputchild: any;

  constructor(private service:EventserviceService, private route:ActivatedRoute) {
  }
  ngOnInit() {
    this.inputchild = this.service.geteventByid(+this.route.snapshot.params["id"]);
  }

}
