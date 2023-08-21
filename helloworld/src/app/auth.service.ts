//import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl="http://localhost:3000/register";
  private _loginUrl="http://localhost:3000/login"
  constructor(private http:HttpService,private _router:Router) { }
  registerUser(user)
  {
    return this.http.post(this._registerUrl,user);

  }
  loginUser(user)
  {
    console.log(JSON.stringify(user))
    return this.http.post(this._loginUrl,user);
  }
  loggedIn()
  {
    return !!localStorage.getItem('token');
  }
  logoutUser()
  {
    localStorage.removeItem('token');
    this._router.navigate(['/home'])
  }
  getToken()
  {
    return localStorage.getItem('token');
  }

}
