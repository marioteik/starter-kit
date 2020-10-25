import { TestBed } from '@angular/core/testing';

import { ListGithubServiceService } from './list-github-service.service';

describe('ListGithubServiceService', () => {
  let service: ListGithubServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListGithubServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
