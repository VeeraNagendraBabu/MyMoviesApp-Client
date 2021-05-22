import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MymoviesServiceService } from '../mymovies-service.service';

import { MymoviesListComponent } from './mymovies-list.component';

describe('MymoviesListComponent', () => {
  let component: MymoviesListComponent;
  let fixture: ComponentFixture<MymoviesListComponent>;
  // private spinner: NgxSpinnerService,
  // private router: Router,
  // private moviesService: MymoviesServiceService,
  // private route: ActivatedRoute 
  let  MymoviesServiceServiceObj= TestBed.createComponent(MymoviesServiceService);
  let  routeObj= TestBed.createComponent(ActivatedRoute);
  let  spinnerObj= TestBed.createComponent(NgxSpinnerService);
  let  routObj= TestBed.createComponent(Router);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MymoviesListComponent ],
      providers: [
        { provides:MymoviesServiceService, useValue: MymoviesServiceServiceObj },
        { provides:ActivatedRoute, useValue: routeObj },
        { provides:NgxSpinnerService , useValue: spinnerObj },
        { provides:Router , useValue: routObj }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MymoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
