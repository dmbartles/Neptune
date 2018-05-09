import { TestBed, inject } from '@angular/core/testing';

import { CreativeService } from './creative.service';

describe('CreativeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreativeService]
    });
  });

  it('should be created', inject([CreativeService], (service: CreativeService) => {
    expect(service).toBeTruthy();
  }));
});
