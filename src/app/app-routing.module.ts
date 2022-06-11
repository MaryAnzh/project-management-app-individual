import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

import { BoardsModule } from './boards/boards.module';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { welcomeComponent } from './welcome/pages/welcome/welcome.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegistrationComponent } from './auth/pages/registration/registration.component';
import { EditProfileComponent } from './auth/pages/edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'boards',
    pathMatch: 'full',
  },
  {
    path: 'boards',
    loadChildren: () => import('./boards/boards.module').then(m => m.BoardsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'welcome',
    component: welcomeComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
