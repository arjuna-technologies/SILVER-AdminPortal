import { TestBed, inject } from '@angular/core/testing';

import { ConsentRendererDefLoaderService } from './consent-renderer-def-loader.service';

describe('ConsentRendererDefLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsentRendererDefLoaderService]
    });
  });

  it('should be created', inject([ConsentRendererDefLoaderService], (service: ConsentRendererDefLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
