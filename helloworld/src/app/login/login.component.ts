import { Component } from '@angular/core';
import {Router} from '@angular/router'
import {AuthService} from '../auth.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginUserData=  {email:"",
  password:""}
  constructor(private _auth:AuthService,private _router:Router)
  {

  }
  loginUser()
  {
    console.log("sending "+this.loginUserData.email+this.loginUserData.password)
    console.log(JSON.stringify(this.loginUserData)+"sending ")
    this._auth.loginUser(this.loginUserData).subscribe(
      { next : res => {
          console.log(res)
          localStorage.setItem('token',res.token)
          this._router.navigate(['/home'])
          },
            error:err=> console.log(err)
      }
      )



  }

}
