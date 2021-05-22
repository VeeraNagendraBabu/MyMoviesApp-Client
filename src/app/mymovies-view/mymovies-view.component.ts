import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, Subscription } from 'rxjs';
import { MymoviesServiceService } from '../mymovies-service.service';

@Component({
  selector: 'app-mymovies-view',
  templateUrl: './mymovies-view.component.html',
  styleUrls: ['./mymovies-view.component.css']
})
export class MymoviesViewComponent implements OnInit {
  movieID: any;
  subscription: Subscription
  movie:any;
  constructor( 
    private spinner: NgxSpinnerService,
    private readonly route: ActivatedRoute,
    private readonly movieService: MymoviesServiceService) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.movieID = params['id']; // get the id from url
      this.subscription = this.movieService.getMovieDetailsByID(this.movieID).subscribe(res => {          
        this.movie = JSON.parse(res['_body']);
        this.hideSpinner();
      // this.hideSpinner();
    });
        
     
    });
  }
   //Hiding the spinner
   hideSpinner() {
    this.spinner.hide();
  }

  //Showing the spinner
  showSpinner() {
    this.spinner.show();
  }

}
