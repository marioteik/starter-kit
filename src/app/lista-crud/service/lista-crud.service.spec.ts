import { TestBed } from '@angular/core/testing';

import { ListaCrudService } from './lista-crud.service';

describe('ListaCrudService', () => {
  let service: ListaCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
