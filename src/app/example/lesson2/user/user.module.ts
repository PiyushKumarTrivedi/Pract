import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {userRoutes  } from "./profile/user.Routes";
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { Profile2Component } from './profile2/profile2.component';


@NgModule({
  declarations: [
    ProfileComponent,
    Profile2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule
  ]
})
export class UserModule { }
