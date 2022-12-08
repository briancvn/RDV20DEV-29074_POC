import { TestBed } from '@angular/core/testing';

import { FuehrerwesenService } from './fuehrerwesen.service';

describe('FuehrerwesenService', () => {
  let service: FuehrerwesenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuehrerwesenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
