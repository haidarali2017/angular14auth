import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {SharedServiceService } from '../../services/shared-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginServiceDatacheck: any;
  username: any;
  constructor(private loginServiceData: LoginService,private sharedService: SharedServiceService) {
    this.loginServiceDatacheck = this.loginServiceData.getMatchUserData();
    console.warn("test",this.loginServiceData.getMatchUserData());
   }

  ngOnInit(): void {
    this.sharedService.userLoggedIn.subscribe((userData: any) => {
      this.username = userData.username;
      // Other actions if needed
    });
  }

  logout() {
    // Logout logic
  }

}
