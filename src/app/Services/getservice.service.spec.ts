import { TestBed } from '@angular/core/testing';

import { GetserviceService } from './getservice.service';

describe('GetserviceService', () => {
  let service: GetserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
