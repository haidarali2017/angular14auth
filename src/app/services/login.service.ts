import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private checkLoginData: any;
  signUpFormData: any;
  constructor(private http: HttpClient) {   }


  checkUsers(loginData:any): void
  {
     this.checkLoginData = loginData;
    //  console.warn("login:",this.checkLoginData );
  }

  public getMatchUserData(): any {
    return this.checkLoginData;
  }
}
