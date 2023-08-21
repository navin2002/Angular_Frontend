import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerUserData:User={
    email:"",
    password:""

  }
  constructor(private _auth:AuthService,private _router:Router)
  {

  }
  registerUser()
  {
    this._auth.registerUser(this.registerUserData).subscribe(
          {
              next : res => {
              console.log(res)
              localStorage.setItem('token',res.token)
              this._router.navigate(['/home'])
              },
                error:err=> console.log(err)
          }
      )



  }

}
