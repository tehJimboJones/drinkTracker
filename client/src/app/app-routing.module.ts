import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: 'home',
  loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
},
{
  path: 'drinkUnitAdmin',
  loadChildren: () => import('./components/drink-unit-admin/drink-unit-admin.module').then(m => m.DrinkUnitAdminModule)
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: '**',
  loadChildren: () => import('./components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
