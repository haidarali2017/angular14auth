import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctiondelcationComponent } from './functiondelcation/functiondelcation.component';
import { HeaderComponent } from './header/header.component';
import { ChildComponent } from './child/child.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    FunctiondelcationComponent,
    HeaderComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FunctiondelcationComponent,
    HeaderComponent,
    ChildComponent
  ]
})
export class PracticeModule { }
