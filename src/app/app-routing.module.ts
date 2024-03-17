import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GifDetailsComponent } from './components/gif-details/gif-details.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', title: 'Home', component: SearchComponent },
  { path: 'details/:id', title: 'Details', component: GifDetailsComponent },
  { path: 'about', title: 'About', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
