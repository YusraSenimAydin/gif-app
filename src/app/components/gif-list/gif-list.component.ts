import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../models/gif.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrl: './gif-list.component.css',
})
export class GifListComponent {
  @Input()  trendingGifs: Gif[] |null |undefined = null;

  constructor(private router: Router) {}

  getGifDetails(gif: Gif): void {
    if (gif && gif.id) {
      this.router.navigate(['/details', gif.id]);
    } else {
      console.error('Gif or id is undefined');
    }
}


}
