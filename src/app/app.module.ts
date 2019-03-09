import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Lesson1Component } from './example/lesson1/lesson1.component';
import { HomeComponent } from './home/home.component';
import { EventChildComponent } from './example/lesson1/event-child/event-child.component';
import { EventParentComponent } from './example/lesson1/event-parent/event-parent.component';

import { EventserviceService } from './example/lesson2/event.service';
import { EventchildComponent } from './example/lesson2/eventchild/eventchild.component';
import { EventparentComponent } from './example/lesson2/eventparent/eventparent.component';
import { EventDetailsComponent } from './lesson2/event-details/event-details.component';
import { EventdetailsComponent } from './example/lesson2/eventdetails/eventdetails.component';
import { ErrorComponent } from './example/error/error.component';
import { CreateEventComponent } from './example/lesson2/create-event/create-event.component';

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
    EventDetailsComponent,
    EventdetailsComponent,
    ErrorComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    EventserviceService,
    EventserviceService,
    {
     provide: 'CreateDeactivateMethod', useValue: checkDirtyState
    }


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
