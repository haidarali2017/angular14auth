import { Injectable, EventEmitter  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }
  
  public userLoggedIn: EventEmitter<any> = new EventEmitter<any>();

  public emitUserLoggedIn(userData: any) {
    this.userLoggedIn.emit(userData);
  }
}
