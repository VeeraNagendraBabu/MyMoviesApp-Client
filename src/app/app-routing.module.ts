import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MymoviesListComponent } from './mymovies-list/mymovies-list.component';

const routes: Routes = [{ path: "", component: MymoviesListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
