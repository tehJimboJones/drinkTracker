import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkUnitAdminComponent } from './drink-unit-admin.component';

const routes: Routes = [{ path: '', component: DrinkUnitAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrinkUnitAdminRoutingModule { }
