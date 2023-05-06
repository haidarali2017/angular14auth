import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functiondelcation',
  templateUrl: './functiondelcation.component.html',
  styleUrls: ['./functiondelcation.component.css']
})
export class FunctiondelcationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  // get valu parameter  
  getName(name:number){
      alert(name );
  }
  // get value
  display:string='';
  getValue(val:any){
    // alert(val);
    this.display=val;
  }

  // count
  count =0;
  counter(type:string){

    type=='add'? this.count ++:this.count--;
   
  }


  // property binding

  name ="haidar";
  disable=false;

  // if else condition

  // show=true;
  show='yes';

  // loop 

  friendslist = [
    {
      name: 'Nishant',
      age: 25
    },
    {
      name: 'Shailesh',
      age: 45
    },
    {
      name: 'Abhishek',
      age: 36
    },
    {
      name: 'Akshay',
      age: 65
    },
    {
      name: 'Ashish',
      age: 12
    },
    {
      name: 'Uday',
      age: 31
    },
    {
      name: 'Mayank',
      age: 45
    },
    {
      name: 'Raju',
      age: 74
    },
  ];

  users=[
    {name:'haidar',phone:11111,socialAcount:['facebook','insta','gmail']},
    {name:'Hiya',phone:11111,socialAcount:['facebook','insta','gmail']},
    {name:'haisam',phone:11111,socialAcount:['facebook','insta','gmail']},
    {name:'arafat',phone:11111,socialAcount:['facebook','insta','gmail']}
  ];

  // style binding
   color="green";
   updateColor(){
    this.color='red';
   }

  //  toggleButton
  displayToggle=true;
  toggleButton(){
    // alert(3);
    this.displayToggle=!this.displayToggle;
  }
}
