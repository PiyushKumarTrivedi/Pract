import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  isdirty:boolean = true;
  constructor(private route:Router) {
    
   }
   Cancel():void{
    this.route.navigate(['/Lesson2']);
   }
  ngOnInit() {
  }

}
