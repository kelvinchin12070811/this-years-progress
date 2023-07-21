import { TestBed } from '@angular/core/testing';

import { CountDownServiceService } from './count-down-service.service';

describe('CountDownServiceService', () => {
  let service: CountDownServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountDownServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
