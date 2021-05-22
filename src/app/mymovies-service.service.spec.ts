import { TestBed } from '@angular/core/testing';
import { Http } from '@angular/http';

import { MymoviesServiceService } from './mymovies-service.service';

describe('MymoviesServiceService', () => {
  let service: MymoviesServiceService;
  let  httpObj= TestBed.createComponent(Http);
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [Http] });
    service = TestBed.inject(MymoviesServiceService);
    httpObj = TestBed.get(Http);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be returning Data from DB', () => {
   var data  = service.getMovies();
   service.getMovies().subscribe(res => {
    expect(service).toBeTruthy();
    var movies =JSON.parse(res['_body']);
    expect(movies.length).not.toEqual(0);
    
});
   
  });
});
