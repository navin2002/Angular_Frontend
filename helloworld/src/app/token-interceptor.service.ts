

import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';
//import {Injectable,Injector} from '@angular/core';//cyclic dependency error when direct inject
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  //constructor(private injector:Injector) { }
  y:any;
  constructor(private authService:AuthService) { }
  intercept(req,next)
  {
    //let authService = this.injector.get(AuthService)
    let tokenizedReq=req.clone({
      setHeaders:{
        Authorization:`Bearer ${this.authService.getToken()}` //imp!!! use `` not ''
      }
    }
      )
      console.log(JSON.stringify(req.body) +"interceptor");
      console.log(JSON.stringify(tokenizedReq.body) +"interceptor2");
      console.log(this.authService.getToken()+"is the token");
      this.y= next.handle(tokenizedReq)
      console.log(this.y)
      console.log("hi")
      return this.y;



  }

}
