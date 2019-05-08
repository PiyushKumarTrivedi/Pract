import { Directive } from '@angular/core';
import { Validators, FormGroup, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
 

@Directive({
  selector: '[appLocationAndAddressValidators]',
  providers: [{provide: NG_VALIDATORS, useExisting: LocationAndAddressValidatorsDirective, multi: true}]
})
export class LocationAndAddressValidatorsDirective extends  Validators{

  constructor() {
    super();
  }

    validate(formGroup:FormGroup):ValidationErrors|null{
      let adrress = formGroup.controls["address"];
      let city = formGroup.controls["city"];
      let country = formGroup.controls["country"];
      let onlineUrl = (<FormGroup>formGroup.root).controls["onlineUrl"];
      if((adrress && adrress.value && city && city.value && country && country.value)||
      (onlineUrl && onlineUrl.value))
      {
        return null
      }else {
        return {ValidateLocation:false}
      }
      
    }

}
