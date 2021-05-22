import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http } from '@angular/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MymoviesServiceService {
  constructor(private http: Http) { }

  private operationsAPI =  environment.API_URL;

  private headers = new Headers({ 
      'Content-Type': 'application/json'
  });
  private options = new RequestOptions({ headers: this.headers });

  public getMovies(){
    return this.http.get('/api/Movies/Movies');  
  }
}
