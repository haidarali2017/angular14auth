import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {UserAuthModule} from './user-auth/user-auth.module';
import {PracticeModule} from './practice/practice.module';
import {HomeModule} from './home/home.module'

import {AppComponent } from './app.component';
import { UsdBdtPipe } from './pipes/usd-bdt.pipe';

import { RedElDirective } from './red-el.directive';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'

 
@NgModule({
  declarations: [
    AppComponent,
    UsdBdtPipe,
    RedElDirective,
 
 
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    PracticeModule,
    FormsModule,
    AppRoutingModule,
    HomeModule,
    RouterModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
