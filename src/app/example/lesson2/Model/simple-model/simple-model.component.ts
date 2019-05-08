import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_Token } from 'src/app/example/Common/Service/jq.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-simple-model',
  templateUrl: './simple-model.component.html',
  styleUrls: ['./simple-model.component.css']
})
export class SimpleModelComponent implements OnInit {
@Input() title:string;
@Input() elementId:string;
@ViewChild("examapleOFViewChildClose") containerElement :ElementRef
  constructor(@Inject(JQ_Token)private $:any,private ref:ElementRef)
  {
     //this
  }

  ngOnInit() {
  }

  closeModel()
  {
    console.log(" on Close model2.")
    //this.elementId.n
   // this.$(this.containerElement.nativeElement).modal("hide");
   this.$(`#${this.elementId}`).modal('hide')
  }
}
