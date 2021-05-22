import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MymoviesServiceService } from '../mymovies-service.service';

import { MymoviesViewComponent } from './mymovies-view.component';

describe('MymoviesViewComponent', () => {
  let component: MymoviesViewComponent;
  let fixture: ComponentFixture<MymoviesViewComponent>;
  let  MymoviesServiceServiceObj= TestBed.createComponent(MymoviesServiceService);
  let  routeObj= TestBed.createComponent(ActivatedRoute);
  let  spinnerObj= TestBed.createComponent(NgxSpinnerService);
  // private spinner: NgxSpinnerService,
  //   private readonly route: ActivatedRoute,
  //   private readonly movieService: MymoviesServiceService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MymoviesViewComponent ],
      providers: [
        { provides:MymoviesServiceService, useValue: MymoviesServiceServiceObj },
        { provides:ActivatedRoute, useValue: routeObj },
        { provides:NgxSpinnerService , useValue: spinnerObj }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MymoviesViewComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
