import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gif } from '../../models/gif.model';
import { GifService } from '../../services/giphy.service';

@Component({
  selector: 'app-gif-details',
  templateUrl: './gif-details.component.html',
  styleUrls: ['./gif-details.component.css'],


})


export class GifDetailsComponent implements OnInit {
  @Input() gifDetails: Gif | undefined;

  constructor(private route: ActivatedRoute, private gifService: GifService) {}

  async ngOnInit() {
    const gifIdFromRoute = this.route.snapshot.paramMap.get('id');
    this.getTrendingGifs(gifIdFromRoute);
  }


  getTrendingGifs(gifIdFromRoute:string | null) {
    this.gifService.getGifDetails(gifIdFromRoute).subscribe({
      next: (response: any) => {
        this.gifDetails = response.data as Gif;
      },
      error: (error) => console.log('Error getTrendingGifs', error),
    });
  }



}
