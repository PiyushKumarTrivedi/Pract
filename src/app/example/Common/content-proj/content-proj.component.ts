import { Component, OnInit, Input } from '@angular/core';
 

@Component({
  selector: 'app-content-proj',
  templateUrl: './content-proj.component.html',
  
})
export class ContentProjComponent implements OnInit {
@Input() title:string;
public Visible:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  ContentToggle(){
  this.Visible= !this.Visible;
  }

}
