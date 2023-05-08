import { Component, OnInit } from '@angular/core';
import {UserdataService} from '../../services/userdata.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // signUpFormData: any;
  // constructor(private UserdataService:UserdataService ) 
  // {
  //   this.signUpFormData = this.UserdataService.getSignUpFormData();
  //   console.warn(this.UserdataService.getSignUpFormData());
    
  // }

  signUpFormData: any;

  constructor(private dataService: UserdataService) {
    this.signUpFormData = this.dataService.getSignUpFormData();
    // console.warn(this.dataService.getSignUpFormData());
  }

   
  ngOnInit(): void {
  }

   userLogin(item:any){ 
    console.warn(item.username,item.password);
    console.warn(this.signUpFormData.username,this.signUpFormData.password);
  
    // console.warn(JSON.stringify(this.signUpFormData));
    // console.warn(JSON.stringify(item));
    //  console.warn();
    // console.warn();
    const  signobj=JSON.parse(this.signUpFormData);
    const  loginObj=JSON.parse(item)
    // console.warn(this.signUpFormData);
    // console.warn(item);
    const isLoggedIn = signobj.find(
      (data:any) => data.username === loginObj.username && data.password === loginObj.password
    );

    if (isLoggedIn) {
      // Redirect to the authenticated page or perform any necessary actions
      console.log('Login successful!');
    } else {
      // Show an error message or perform any necessary actions
      console.log('Login failed!');
    }
  }

}
