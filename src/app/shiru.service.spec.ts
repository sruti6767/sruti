import { TestBed } from '@angular/core/testing';

import { ShiruService } from './shiru.service';

describe('ShiruService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShiruService = TestBed.get(ShiruService);
    expect(service).toBeTruthy();
  });
});
