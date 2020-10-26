import { TestBed } from '@angular/core/testing';

import { ListExampleService } from './list-example.service';

describe('ListExampleService', () => {
  let service: ListExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
