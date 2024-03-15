import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifListComponent } from './components/gif-list/gif-list.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', title: 'Gif', component: GifListComponent },
  { path: 'about', title: 'About', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
