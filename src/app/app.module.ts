import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MymoviesListComponent } from './mymovies-list/mymovies-list.component';
import { MymoviesViewComponent } from './mymovies-view/mymovies-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MymoviesListComponent,
    MymoviesViewComponent
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
