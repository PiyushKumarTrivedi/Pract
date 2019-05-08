import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_Token } from '../Service/jq.service';

@Directive({
  selector: '[appModelTrigegr]'
})
export class ModelTrigegrDirective implements OnInit {
  @Input() appModelTrigegr:string;
  //not if you are passing any id as input with dash like appModel-Trigegr.
  // the use like this  
  //@Input(appModel-Trigegr)  appModelID: string  

  el:HTMLElement
  constructor(@Inject(JQ_Token)private $:any,private Refel:ElementRef) {
    this.el=Refel.nativeElement;
    console.log("constructor")
   }

  //  constructor(@Inject(JQ_Token)private $:any) {
  //  // this.el=Refel.nativeElement;
  //   this.el.nativeElement;
  //   console.log("constructor")
  //  }

  ngOnInit(){
    console.log("checking with different input")
    this.el.addEventListener("click", e => {
     this.$(`#${this.appModelTrigegr}`).modal({});
    })

  }

}
