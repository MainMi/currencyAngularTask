import { TestBed } from '@angular/core/testing';

import { RatesResolveService } from './rates-resolve.service';

describe('RatesResolveService', () => {
  let service: RatesResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatesResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
