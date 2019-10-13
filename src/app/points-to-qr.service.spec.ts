import { TestBed } from '@angular/core/testing';

import { PointsToQrService } from './points-to-qr.service';

describe('PointsToQrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PointsToQrService = TestBed.get(PointsToQrService);
    expect(service).toBeTruthy();
  });
});
