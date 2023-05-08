import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginServiceDatacheck: any;
  constructor(private loginServiceData: LoginService) {
    this.loginServiceDatacheck = this.loginServiceData.getMatchUserData();
    console.warn("test",this.loginServiceData.getMatchUserData());
   }

  ngOnInit(): void {
  }

}
