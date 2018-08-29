import { TestBed, inject } from '@angular/core/testing';

import { NFLServiceService } from './nfl-service.service';

describe('NFLServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NFLServiceService]
    });
  });

  it('should be created', inject([NFLServiceService], (service: NFLServiceService) => {
    expect(service).toBeTruthy();
  }));
});
