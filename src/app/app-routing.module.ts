import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Lesson1Component } from './example/lesson1/lesson1.component';
import { EventchildComponent } from './example/lesson2/eventchild/eventchild.component';
import { EventparentComponent } from './example/lesson2/eventparent/eventparent.component';
import { EventdetailsComponent } from './example/lesson2/eventdetails/eventdetails.component';
import { ErrorComponent } from './example/error/error.component';
import { EventRouteActivatorService } from './example/event-route-activator.service';
 

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Lesson', component: Lesson1Component },
  { path: 'Lesson2', component: EventparentComponent },
  { path: 'event/:id', component: EventchildComponent },
  { path: 'detailsPage/:id', component: EventdetailsComponent,canActivate:[EventRouteActivatorService] },
  { path: '404', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
