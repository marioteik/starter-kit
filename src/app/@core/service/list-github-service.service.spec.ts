import { TestBed } from '@angular/core/testing';

import { ListGithubService } from './list-github-service.service';

describe('ListGithubService', () => {
  let service: ListGithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListGithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
