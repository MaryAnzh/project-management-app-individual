import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {

}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let iwAuth = false;
    this.authService.isLoggedIn$.subscribe(
      value => iwAuth = value
    )
    if (!iwAuth) {
      this.router.navigateByUrl('/welcome');
    } else {
      let date = ''
      this.authService.user$.subscribe(
        (value) => date = value?.date ? value?.date : ''
      )

      //this.authService.checktokenExpiration(date.toString());
    }
    return iwAuth;
  }

}
