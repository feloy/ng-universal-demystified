import { TestBed, inject } from '@angular/core/testing';

import { SeoService } from './seo.service';

describe('SeoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeoService]
    });
  });

  it('should ...', inject([SeoService], (service: SeoService) => {
    expect(service).toBeTruthy();
  }));
});
