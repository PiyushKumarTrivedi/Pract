import { Component, OnInit, PipeTransform,Pipe } from '@angular/core';
 

 @Pipe({name:'Duration'})
export class DurationPipeComponent implements PipeTransform {

  transform(value:number):string{
    switch (value) {
      case 1:
        return 'Half Hour'
        case 2:
        return 'Full Hour'

        case 3: return'Half Day'
        case 4: return 'Full Day'
      default:
        return value.toString()
    }
  }

}
