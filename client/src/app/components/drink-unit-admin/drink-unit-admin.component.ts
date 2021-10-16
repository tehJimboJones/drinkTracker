import { Component, OnInit } from '@angular/core';
import { drinkUnit } from '../../model/drinkUnit';
import { DrinkUnitService } from '../../services/drink-unit.service';

@Component({
  selector: 'app-drink-unit-admin',
  templateUrl: './drink-unit-admin.component.html',
  styleUrls: ['./drink-unit-admin.component.css']
})
export class DrinkUnitAdminComponent implements OnInit {

  drinkUnits!: drinkUnit[];

  //constructor() { }

  constructor(private drinkUnitService: DrinkUnitService) { }

  ngOnInit(): void {
    //this.drinkUnitService.getAllDrinkUnits().subscribe(d => this.drinkUnits = d);
  }

}
