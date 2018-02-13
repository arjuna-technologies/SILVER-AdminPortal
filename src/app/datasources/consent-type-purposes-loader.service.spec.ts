import { TestBed, inject } from '@angular/core/testing';

import { ConsentTypePurposesLoaderService } from './consent-type-purposes-loader.service';

describe('ConsentTypePurposesLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsentTypePurposesLoaderService]
    });
  });

  it('should be created', inject([ConsentTypePurposesLoaderService], (service: ConsentTypePurposesLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
