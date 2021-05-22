import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymoviesListComponent } from './mymovies-list.component';

describe('MymoviesListComponent', () => {
  let component: MymoviesListComponent;
  let fixture: ComponentFixture<MymoviesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MymoviesListComponent ]
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
