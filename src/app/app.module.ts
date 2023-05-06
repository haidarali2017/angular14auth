import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UserAuthModule} from './user-auth/user-auth.module';
import {PracticeModule} from './practice/practice.module';
import {AppComponent } from './app.component';
import { UsdBdtPipe } from './pipes/usd-bdt.pipe';

 
@NgModule({
  declarations: [
    AppComponent,
    UsdBdtPipe,
 
 
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    PracticeModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
