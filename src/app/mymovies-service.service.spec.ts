import { TestBed } from '@angular/core/testing';

import { MymoviesServiceService } from './mymovies-service.service';

describe('MymoviesServiceService', () => {
  let service: MymoviesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MymoviesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
