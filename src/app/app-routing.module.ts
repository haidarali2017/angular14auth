import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import {LoginComponent} from './user-auth/login/login.component';
import {SignupComponent} from './user-auth/signup/signup.component';
import { HomeComponent } from './home/home/home.component';
import {AboutComponent} from './home/about/about.component'

const routes:Routes=[
  {
    path:'login',
    component:LoginComponent

  },
  {
    path:'signup',
    component:SignupComponent

  },
  
  {
    path:'about/:id',
    component:AboutComponent
  },
  {
    path:'',
    component:HomeComponent
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
