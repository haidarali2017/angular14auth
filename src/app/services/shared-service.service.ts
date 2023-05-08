import { Injectable, EventEmitter   } from '@angular/core';
import { Router } from '@angular/router';
 

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService  {
 
  constructor(private router: Router) { 
  
  }

  public userLoggedIn: EventEmitter<any> = new EventEmitter<any>();

  public emitUserLoggedIn(userData: any) {
    this.userLoggedIn.emit(userData);
  }

  logout(): void {
 
    this.router.navigate(['/login']);
    window.location.reload();
    //  SharedServiceService = null;
  }

 


}
