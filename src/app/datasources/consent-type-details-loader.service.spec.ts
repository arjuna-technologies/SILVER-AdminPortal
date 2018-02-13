import { TestBed, inject } from '@angular/core/testing';

import { ConsentTypeDetailsLoaderService } from './consent-type-details-loader.service';

describe('ConsentTypeDetailsLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsentTypeDetailsLoaderService]
    });
  });

  it('should be created', inject([ConsentTypeDetailsLoaderService], (service: ConsentTypeDetailsLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
