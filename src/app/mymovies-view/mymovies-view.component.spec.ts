import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymoviesViewComponent } from './mymovies-view.component';

describe('MymoviesViewComponent', () => {
  let component: MymoviesViewComponent;
  let fixture: ComponentFixture<MymoviesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MymoviesViewComponent ]
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
