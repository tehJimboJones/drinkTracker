import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkUnitAdminComponent } from './drink-unit-admin.component';

describe('DrinkUnitAdminComponent', () => {
  let component: DrinkUnitAdminComponent;
  let fixture: ComponentFixture<DrinkUnitAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkUnitAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkUnitAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
