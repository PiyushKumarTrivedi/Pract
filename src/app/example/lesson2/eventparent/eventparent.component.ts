import { Component, OnInit } from '@angular/core';
import { EventserviceService } from '../event.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventparent',
  templateUrl: './eventparent.component.html',
  styleUrls: ['./eventparent.component.css']
})
export class EventparentComponent implements OnInit {
  Parentevent: any;

  constructor(private service: EventserviceService, private route: Router,private activateroute: ActivatedRoute) { }

  ngOnInit() {
    //  this.service.getevent().subscribe(e => {this.Parentevent = e;});
    this.Parentevent = this.activateroute.snapshot.data['resolveparent'];
  }
  CreateNewEvent(): void {
    this.route.navigate(['/Create']);
  }
}
