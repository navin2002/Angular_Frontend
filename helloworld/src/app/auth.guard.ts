/*import { CanActivateFn,Router} from '@angular/router';
import {inject} from '@angular/core'
import { AuthService } from './auth.service';
export const authGuard: CanActivateFn = (route, state) => {
  const current=route.url[0].path;
  const router=inject(Router);
  const auth=inject(AuthService);
  if(current=="reportbuilder" || current=="dashboard")
  {
    if(!auth.loggedIn)
    {
      router.navigate(['']);
      return false;
    }
    return true;
  }
  else
  {
    return true;
  }



};
*/
import {inject} from '@angular/core';
import { Router } from '@angular/router';

import {AuthService} from './auth.service';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.loggedIn()) {
    return true;
  }

  // Redirect to the login page
  return router.parseUrl('/login');
};
