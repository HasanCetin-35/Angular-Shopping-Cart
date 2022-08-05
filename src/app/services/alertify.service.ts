import { Injectable } from '@angular/core';
declare let alertify:any;
@Injectable({
  providedIn: 'root'//root ifadesi global bir servis anlamına getiriyor.
})
export class AlertifyService {

  constructor() { }
  success(message:string){
    alertify.success(message)
  }
}
