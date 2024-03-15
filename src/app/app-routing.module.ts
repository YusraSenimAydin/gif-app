import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifListComponent } from './components/gif-list/gif-list.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', component: GifListComponent },
  { path: 'about', component: AboutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
