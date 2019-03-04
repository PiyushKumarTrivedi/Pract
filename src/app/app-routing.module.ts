import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Lesson1Component } from './example/lesson1/lesson1.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Lesson', component: Lesson1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
