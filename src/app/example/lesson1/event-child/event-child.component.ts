import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-child',
  templateUrl: './event-child.component.html',
  styleUrls: ['./event-child.component.css']
})
export class EventChildComponent implements OnInit {

  @Input() inputchild :any[];
  constructor() { }

  ngOnInit() {
  }

}
