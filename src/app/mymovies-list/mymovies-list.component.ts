import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs/internal/Subscription';
import { MymoviesServiceService } from '../mymovies-service.service';

@Component({
  selector: 'app-mymovies-list',
  templateUrl: './mymovies-list.component.html',
  styleUrls: ['./mymovies-list.component.css']
})
export class MymoviesListComponent implements OnInit {
  subscription: Subscription
  movies: any;
  constructor(
    private spinner: NgxSpinnerService,
    private router: Router,
    private moviesService: MymoviesServiceService,
    private route: ActivatedRoute
   
  ) { }

  ngOnInit(): void {
    this.showSpinner();
    this.getMoviesList();
    this.hideSpinner();
  }
  //Hiding the spinner
  hideSpinner() {
    this.spinner.hide();
  }

  //Showing the spinner
  showSpinner() {
    this.spinner.show();
  }

  //Data from WebAPI
  getMoviesList() {
    // Condition check for Initiation dates and Visit Happening dates

        //Subscribing to the visit list data from backend
        this.subscription = this.moviesService.getMovies().subscribe(res => {          
            this.movies = JSON.parse(res['_body']);
            this.hideSpinner();
         debugger;
          // this.hideSpinner();
        });
  }
}
