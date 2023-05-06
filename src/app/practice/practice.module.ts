import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { FunctiondelcationComponent } from './functiondelcation/functiondelcation.component';
import { HeaderComponent } from './header/header.component';
import { ChildComponent } from './child/child.component';
 


@NgModule({
  declarations: [
    FunctiondelcationComponent,
    HeaderComponent,
    ChildComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FunctiondelcationComponent,
    HeaderComponent,
    ChildComponent,
    
  ]
})
export class PracticeModule { }
