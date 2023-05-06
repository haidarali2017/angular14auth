import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-14';
  // parent_data_pass_to_child
   parent_data_pass_to_child=10;
   updateChild(){
    this.parent_data_pass_to_child=Math.floor(Math.random()*10);
   }
}
