import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinkUnitAdminRoutingModule } from './drink-unit-admin-routing.module';
import { DrinkUnitAdminComponent } from './drink-unit-admin.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DrinkUnitAdminComponent
  ],
  imports: [
    CommonModule,
    DrinkUnitAdminRoutingModule,
    FormsModule,
  ]
})
export class DrinkUnitAdminModule { }
