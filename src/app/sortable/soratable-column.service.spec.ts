import { TestBed } from '@angular/core/testing';

import { SoratableColumnService } from './soratable-column.service';

describe('SoratableColumnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoratableColumnService = TestBed.get(SoratableColumnService);
    expect(service).toBeTruthy();
  });
});
