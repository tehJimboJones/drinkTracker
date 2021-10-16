import { TestBed } from '@angular/core/testing';

import { DrinkUnitService } from './drink-unit.service';

describe('DrinkUnitService', () => {
  let service: DrinkUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
