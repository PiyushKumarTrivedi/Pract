import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EventserviceService } from "../event.service";

@Component({
  selector: 'app-eventparent',
  templateUrl: './eventparent.component.html',
  styleUrls: ['./eventparent.component.css']
})
export class EventparentComponent implements OnInit {
  Parentevent: any;

  constructor(private service:EventserviceService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.Parentevent = this.service.geteventByid(+this.route.snapshot.params['id']);
  }

}
