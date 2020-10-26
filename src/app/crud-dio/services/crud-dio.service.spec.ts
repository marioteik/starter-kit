import { TestBed } from '@angular/core/testing';

import { CrudDioService } from './crud-dio.service';

describe('CrudDioService', () => {
  let service: CrudDioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudDioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
