import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { WelcomComponent } from './core/pages/welcom/welcom.component';
import { BoardsComponent } from './boards/boards.component';

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
    path: 'boards',
    loadChildren: () => import('./boards/boards.module').then(m => m.BoardsModule)
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
