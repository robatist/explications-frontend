import { TestBed } from '@angular/core/testing';

import { ExplicationService } from './explication-service.service';

describe('ExplicationServiceService', () => {
  let service: ExplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
