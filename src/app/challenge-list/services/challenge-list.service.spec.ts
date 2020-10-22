import { TestBed } from '@angular/core/testing';

import { ChallengeListService } from './challenge-list.service';

describe('ChallengeListService', () => {
  let service: ChallengeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChallengeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
