import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { WelcomComponent } from './core/pages/welcom/welcom.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcom',
    pathMatch: 'full',
  },
  {
    path: 'welcom',
    component: WelcomComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
