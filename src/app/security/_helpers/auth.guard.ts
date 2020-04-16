import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { AuthenticationService } from '../authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        // private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // const currentUser = this.authenticationService.currentUserValue;
        // if (currentUser && !this.authenticationService.isTokenExpired(currentUser.tokenInfo.accessToken)) {
        //     // logged in so return true
             return true;
        // }
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        // return false;
    }
}