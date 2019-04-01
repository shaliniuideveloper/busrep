import { TestBed } from '@angular/core/testing';

import { BusReportsService } from './bus-reports.service';

describe('BusReportsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusReportsService = TestBed.get(BusReportsService);
    expect(service).toBeTruthy();
  });
});
