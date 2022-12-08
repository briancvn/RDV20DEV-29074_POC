import { TestBed } from '@angular/core/testing';

import { SystemwesenService } from './systemwesen.service';

describe('SystemwesenService', () => {
  let service: SystemwesenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemwesenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
