import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/service/auth-service/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  public isAuth$: Observable<boolean>;

  public user$: Subscription;

  public userName: string = '';

  public isBurgerOpen: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    public translate: TranslateService,
  ) {
    this.isAuth$ = this.authService.isLoggedIn$;

    this.user$ = this.authService.user$.subscribe({
      next: (value) => value ? this.userName = value.name : '',
      complete: () => this.user$.unsubscribe,
     })

    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
   }

  translateLanguageTo(lang: string): void {
    this.translate.use(lang);
  }

  logout() {
    this.router.navigateByUrl('/welcome');
    this.authService.logout();
  }

}
