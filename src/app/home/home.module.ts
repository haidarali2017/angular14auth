import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NoPageComponent } from './no-page/no-page.component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    NoPageComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    NoPageComponent
  ]

})
export class HomeModule { }
