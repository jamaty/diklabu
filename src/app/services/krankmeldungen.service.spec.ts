import { TestBed } from '@angular/core/testing';

import { KrankmeldungenService } from './krankmeldungen.service';

describe('KrankmeldungenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KrankmeldungenService = TestBed.get(KrankmeldungenService);
    expect(service).toBeTruthy();
  });
});
