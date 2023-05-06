import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctiondelcationComponent } from './functiondelcation/functiondelcation.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    FunctiondelcationComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FunctiondelcationComponent,
    HeaderComponent
  ]
})
export class PracticeModule { }
