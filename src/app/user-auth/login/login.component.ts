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
  }

   
  ngOnInit(): void {
  }

  userLogin(item:any){
    console.warn(item);
   
  }

}
