import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users(){
    return[
      {name:'haidar',age:28,email:'haidar@gmail.com'},
      {name:'hiya',age:28,email:'hiya@gmail.com'},
      {name:'haisam',age:28,email:'hiya@gmail.com'},
    ]
  }
}
