import { TestBed } from '@angular/core/testing';

import { NaloziService } from './nalozi.service';

describe('NaloziService', () => {
  let service: NaloziService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaloziService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
