import { TestBed, inject } from '@angular/core/testing';

import { ConsentTypeDefLoaderService } from './consent-type-def-loader.service';

describe('ConsentTypeDefLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsentTypeDefLoaderService]
    });
  });

  it('should be created', inject([ConsentTypeDefLoaderService], (service: ConsentTypeDefLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
