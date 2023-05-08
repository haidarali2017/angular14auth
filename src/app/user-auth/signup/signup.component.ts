import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserdataService} from '../../services/userdata.service'
 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpFormData: any;
  constructor(private userdataService:UserdataService ) 
  {
    this.signUpFormData = this.userdataService.getSignUpFormData();
      // console.warn(2);
  }
  
  ngOnInit(): void {
  }

  // formData:any={}
  geUserData(formData:NgForm){
    // console.warn(data);
    // this.formData=data;
    this.userdataService.saveUsers(formData);
  }

  
}
