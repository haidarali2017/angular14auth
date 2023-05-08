import { Injectable, EventEmitter   } from '@angular/core';
import { Router } from '@angular/router';
 

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService  {
  private commentFormData: any;
  constructor(private router: Router) { 
  
  }

  public userLoggedIn: EventEmitter<any> = new EventEmitter<any>();
  public emitUserLoggedIn(userData: any) {
    this.userLoggedIn.emit(userData);
  }

  
  savecomment(data:any): void
  {
     this.commentFormData = data;
      // return this.http.get(this.url,data);
      console.warn(this.commentFormData);

  }

  public getcommentFormData(): any {
    return this.commentFormData;
  }

  logout(): void {
 
    this.router.navigate(['/login']);
    window.location.reload();
    //  SharedServiceService = null;
  }

 


}
