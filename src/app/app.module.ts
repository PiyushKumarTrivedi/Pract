import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Lesson1Component } from './example/lesson1/lesson1.component';
import { HomeComponent } from './home/home.component';
import { EventChildComponent } from './example/lesson1/event-child/event-child.component';
import { EventParentComponent } from './example/lesson1/event-parent/event-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Lesson1Component,
    HomeComponent,
    EventChildComponent,
    EventParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
