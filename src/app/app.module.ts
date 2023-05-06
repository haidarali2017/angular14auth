import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UserAuthModule} from './user-auth/user-auth.module';
import {PracticeModule} from './practice/practice.module';
import {AppComponent } from './app.component';
import { UsdBdtPipe } from './pipes/usd-bdt.pipe';
import {FormsModule} from '@angular/forms';
import { RedElDirective } from './red-el.directive';

 
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
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
