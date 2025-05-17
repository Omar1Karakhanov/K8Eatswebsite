import { TestBed } from '@angular/core/testing';

import { FoodservService } from './cardFounder';

describe('FoodservService', () => {
  let service: FoodservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodservService);
  });

  it('should be created!', () => {
    expect(service).toBeTruthy();
  });
});
