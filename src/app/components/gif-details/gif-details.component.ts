import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gif } from '../../models/gif.model';
import { GifService } from '../../services/giphy.service';

@Component({
  selector: 'app-gif-details',
  templateUrl: './gif-details.component.html',
  styleUrls: ['./gif-details.component.css'],
  

})
export class GifDetailsComponent implements OnInit {
  gifDetails: Gif | undefined;

  constructor(private route: ActivatedRoute, private gifService: GifService) {}

  ngOnInit(): void {
    const gifIdFromRoute = this.route.snapshot.paramMap.get('id');

    if (gifIdFromRoute) {
      this.gifService
        .getGifDetails(gifIdFromRoute)
        .subscribe((response: any) => {
          this.gifDetails = response.data;
        });
    }
  }
}
