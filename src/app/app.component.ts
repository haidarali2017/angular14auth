import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'child  to parent data send';
  // parent_data_pass_to_child
  //  parent_data_pass_to_child=10;
  //  updateChild(){
  //   this.parent_data_pass_to_child=Math.floor(Math.random()*10);
  //  }
   dataset="x";
   updateData(item:string){
    console.warn(item)
    this.dataset=item;
   }




}
