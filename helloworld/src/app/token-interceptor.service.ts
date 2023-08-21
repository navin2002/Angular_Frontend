import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';
//import {Injectable,Injector} from '@angular/core';//cyclic dependency error when direct inject
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  //constructor(private injector:Injector) { }
  constructor(private authService:AuthService) { }
  intercept(req,next)
  {
    //let authService = this.injector.get(AuthService)
    let tokenizedReq=req.clone({
      setHeaders:{
        Authorization:'Bearer ${authService.getToken()}' //es6-syntax
      }
    }
      )
      return next.handle(tokenizedReq)



  }

}
