import { Component, OnInit } from '@angular/core';
import { EventserviceService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventparent',
  templateUrl: './eventparent.component.html',
  styleUrls: ['./eventparent.component.css']
})
export class EventparentComponent implements OnInit {
  Parentevent: any;

  constructor(private service: EventserviceService, private route: Router) { }

  ngOnInit() {
     this.service.getevent().subscribe(e => {this.Parentevent = e;});
  }
  CreateNewEvent(): void {
    this.route.navigate(['/Create']);
  }
}
