import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http: HttpClient  ) { }
  // users(){
  //   return[
  //     {name:'haidar',age:28,email:'haidar@gmail.com'},
  //     {name:'hiya',age:28,email:'hiya@gmail.com'},
  //     {name:'haisam',age:28,email:'hiya@gmail.com'},
  //   ]
  // }
 url ='https://jsonplaceholder.typicode.com/posts';
  postdata(){
    return this.http.get(this.url);
    
  }
}
