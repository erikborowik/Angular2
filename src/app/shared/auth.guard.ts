import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService) {

    }

    //canActivate() {
      //  return this.authService.isAuthenticated();
    //}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("canActivate")
        console.log(route);
        console.log(state);
        return this.authService.isAuthenticated();
      //return this.permissions.canActivate(this.currentUser, route.params.id);
    }
}