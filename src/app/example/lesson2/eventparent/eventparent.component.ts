import { Component, OnInit } from '@angular/core';
import { EventserviceService } from '../event.service';

@Component({
  selector: 'app-eventparent',
  templateUrl: './eventparent.component.html',
  styleUrls: ['./eventparent.component.css']
})
export class EventparentComponent implements OnInit {
  Parentevent: any;

  constructor(private service: EventserviceService) { }

  ngOnInit() {
    this.Parentevent = this.service.getevent();
  }

}
