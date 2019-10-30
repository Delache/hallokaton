import { TestBed } from '@angular/core/testing';

import { RecupPlayerNameService } from './recup-player-name.service';

describe('RecupPlayerNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecupPlayerNameService = TestBed.get(RecupPlayerNameService);
    expect(service).toBeTruthy();
  });
});
