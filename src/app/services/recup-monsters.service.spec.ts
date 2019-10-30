import { TestBed } from '@angular/core/testing';

import { RecupMonstersService } from './recup-monsters.service';

describe('RecupMonstersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecupMonstersService = TestBed.get(RecupMonstersService);
    expect(service).toBeTruthy();
  });
});
