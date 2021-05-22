import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MymoviesListComponent } from './mymovies-list/mymovies-list.component';
import { MymoviesViewComponent } from './mymovies-view/mymovies-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: "movies", component: MymoviesListComponent },
  { path: 'movies/:id', component: MymoviesViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
