import { Component, OnInit } from '@angular/core';
import { Gif } from '../../models/gif.model';
import { GifService } from '../../services/giphy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gif-details',
  templateUrl: './gif-details.component.html',
  styleUrls: ['./gif-details.component.css'],
})
export class GifDetailsComponent implements OnInit {
  gif: Gif | undefined;

  constructor(private route: ActivatedRoute, private gifService: GifService) {}

  ngOnInit(): void {
    // Current route üzerinden gifId alınmalıdır.
    const gifIdFromRoute = this.route.snapshot.paramMap.get('gifId');

    // GifId null değilse, getGifById fonksiyonunu çağırın
    if (gifIdFromRoute) {
      this.gifService.getGifById(gifIdFromRoute).subscribe((gif: Gif) => {
        this.gif = gif;
      });
    }
  }
}
