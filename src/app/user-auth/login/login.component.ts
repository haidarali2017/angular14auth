import { Component, OnInit } from '@angular/core';
import {UserdataService} from '../../services/userdata.service';
import {LoginService} from '../../services/login.service';
import { Router } from '@angular/router';
import {SharedServiceService } from '../../services/shared-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 

  signUpFormData: any;
  loginServiceDatacheck: any;
 
  constructor(private dataService: UserdataService,private loginServiceData: LoginService,private router: Router,private sharedService: SharedServiceService) {
    this.signUpFormData = this.dataService.getSignUpFormData();
    // console.warn(this.dataService.getSignUpFormData());
    this.loginServiceDatacheck = this.loginServiceData.getMatchUserData();
  }

  ngOnInit(): void {
  }

   userLogin(loginData:any){  

    const logarr = Object.values(loginData);
    const signUp = Object.values(this.signUpFormData);
    if (Array.isArray(signUp)) {
      if (signUp[0] ===  logarr[0] && signUp[1] ===  logarr[1]) {
        this.loginServiceData.checkUsers(loginData);

        const userData = {
          username: loginData.username,
        };

        this.sharedService.emitUserLoggedIn(userData);


        this.router.navigate(['/']);
        alert('Login successful!');
      } else {
        alert('Login failed!');
      }
    } else {
      alert('Invalid signUpFormData. Expected an array.');
    }



    // const loginArray = Object.entries(item);
    // const isArray = Array.isArray(arr);

    //  console.log(loginArray[username]);
    // console.warn(item.username,item.password);
    // console.warn(this.signUpFormData.username,this.signUpFormData.password);
  
    // // console.warn(JSON.stringify(this.signUpFormData));
    // // console.warn(JSON.stringify(item));
    //  console.warn('login data',item);
    // console.warn('signup data:',this.signUpFormData);
    // // const  signobj=JSON.parse(this.signUpFormData);
    // // const  loginObj=JSON.parse(item)
    // // console.warn(this.signUpFormData);
    // // console.warn(item);
    // const isLoggedIn = this.signUpFormData.find(
    //   (data:any) => data.username === item.username && data.password === item.password
    // );

    // if (isLoggedIn) {
    //   // Redirect to the authenticated page or perform any necessary actions
    //   console.log('Login successful!');
    // } else {
    //   // Show an error message or perform any necessary actions
    //   console.log('Login failed!');
    // }
  }

}
