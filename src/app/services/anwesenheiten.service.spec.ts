import { TestBed } from '@angular/core/testing';

import { AnwesenheitenService } from './anwesenheiten.service';

describe('AnwesenheitenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnwesenheitenService = TestBed.get(AnwesenheitenService);
    expect(service).toBeTruthy();
  });
});
