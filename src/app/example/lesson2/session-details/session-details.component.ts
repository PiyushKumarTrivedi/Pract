import { Component, OnInit, Input } from '@angular/core';
import { Isession } from '../isession';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.css']
})
export class SessionDetailsComponent implements OnInit {
@Input() childSessions :Isession[]
  constructor() { }

  ngOnInit() {
  }

}
