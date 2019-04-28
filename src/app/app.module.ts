import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Lesson1Component } from './example/lesson1/lesson1.component';
import { HomeComponent } from './home/home.component';
import { EventChildComponent } from './example/lesson1/event-child/event-child.component';
import { EventParentComponent } from './example/lesson1/event-parent/event-parent.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import{
  EventserviceService,
  EventchildComponent,
  EventparentComponent,
  EventdetailsComponent,
  CreateEventComponent,
  ResolverService,
  CreateSessionComponent,
} from './example/lesson2/Indesx';

 
import { ErrorComponent } from './example/error/error.component';
import { AuthService } from './example/lesson2/user/auth.service';
import { SessionDetailsComponent } from './example/lesson2/session-details/session-details.component';
import { ContentProjComponent } from './example/Common/content-proj/content-proj.component';
import { DurationPipeComponent } from './example/Common/CustomPipe/duration-pipe/duration-pipe.component';
import { ToastrService } from './example/Common/toastr.service';
import { JQ_Token } from './example/Common/Service/jq.service';
import { SimpleModelComponent } from './example/lesson2/Model/simple-model/simple-model.component';
import { ModelTrigegrDirective } from './example/Common/ExtendedHTML/model-trigegr.directive';
 
 
let Jquery=window['$'];
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Lesson1Component,
    HomeComponent,
    EventChildComponent,
    EventParentComponent,
    EventchildComponent,
    EventparentComponent,    
    EventdetailsComponent,
    ErrorComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionDetailsComponent,
    ContentProjComponent,
    DurationPipeComponent,
    SimpleModelComponent,
    ModelTrigegrDirective,
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [
    EventserviceService,
    EventserviceService,
    {
     provide: 'CreateDeactivateMethod', useValue: checkDirtyState
    },
    {
      provide:JQ_Token,useValue:Jquery
    },
    ResolverService,
    AuthService,ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {  }

export function checkDirtyState(component: CreateEventComponent) {

  if (component.isdirty) {
   let abc = window.confirm('Are you sure want to delete this item?');
   
   if (abc === true) {
     alert(abc);
    return false;
   }
   return true;
  }
}
