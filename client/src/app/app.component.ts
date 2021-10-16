import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items!: MenuItem[];

  activeItem!: MenuItem;

  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['home']},
      {label: 'Drink Admin', icon: 'pi pi-fw pi-pencil', routerLink: ['drinkUnitAdmin']},
    ];

    this.activeItem = this.items[0];
  }
}
