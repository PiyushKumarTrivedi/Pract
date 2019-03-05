import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Lesson1Component } from './example/lesson1/lesson1.component';
import { EventchildComponent } from './example/lesson2/eventchild/eventchild.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Lesson', component: Lesson1Component },
  { path: 'event/:id', component: EventchildComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
