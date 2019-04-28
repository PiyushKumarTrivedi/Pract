import { Directive, OnInit, Inject, ElementRef } from '@angular/core';
import { JQ_Token } from '../Service/jq.service';

@Directive({
  selector: '[appModelTrigegr]'
})
export class ModelTrigegrDirective implements OnInit {
  el:HTMLElement
  constructor(@Inject(JQ_Token)private $:any,private Refel:ElementRef) {
    this.el=Refel.nativeElement;
   }
  ngOnInit(){
    this.el.addEventListener("click", e => {
     this.$('#modelId').modal({});
    })

  }

}
