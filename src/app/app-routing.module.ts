import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { InfoComponent } from './info/info/info.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcom',
    pathMatch: 'full',
  },
  {
    path: 'welcom',
    component: InfoComponent
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
