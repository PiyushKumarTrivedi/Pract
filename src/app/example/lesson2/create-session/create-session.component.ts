import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { Isession } from '../isession';
import { Key } from 'protractor';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
 public name: FormControl;
 public presenter: FormControl;
 public duration: FormControl;
 public level: FormControl;
 public abstract: FormControl;
 public newSessionForm: FormGroup;

  constructor() { }

  ngOnInit() {

    this.name =new FormControl('',Validators.required);
    this.presenter =new FormControl('',Validators.required);
    this.duration =new FormControl(0,Validators.required);
    this.level =new FormControl('',Validators.required);
    this.abstract =new FormControl('',[Validators.required,Validators.maxLength(400) ,
      this.RestrictedWords(['foo','crodal','baar', 'not', 'Is'])]);
    this.newSessionForm = new FormGroup({
      name:this.name,
      presenter:this.presenter,
      duration:this.duration,
      level:this.level,
      abstract:this.abstract
    })
    
  }

  saveNewSessionForm(formValues)
    {
      
      let session:Isession ={
        name:formValues.session,
        duration:+formValues.duration,
        level:formValues.level,
        abstract:formValues.abstract,
        id:undefined,
        presenter:formValues.presenter,
        voters:[]

      }
      console.log(session)
    }


    // RestrictedWords(control: AbstractControl): {[Key:string]:any} {

    //  return control.value.includes('foo') ?{'woRestrictedWordsrng' :'foo'}:null;
    // }
    private RestrictedWords(words) { // here you need to understand that output parameter is not key:string and any, its under{}
      
     return (control: AbstractControl): {[Key:string]:any} => {

        if(!words) return null;
        var invalidWords = words.map(w=>control.value.includes(w)?w:null).filter(w=>w != null) ;
                console.log(invalidWords);

      return (invalidWords!= null && invalidWords.length>0)? {'RestrictedWords':invalidWords.join(' ,')}: null
     }
    }

}
