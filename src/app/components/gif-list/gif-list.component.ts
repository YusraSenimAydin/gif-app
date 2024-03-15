import { Component, OnInit } from '@angular/core';
import { GifService } from '../../services/giphy.service';
import { Gif } from '../../models/gif.model';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrl: './gif-list.component.css',
})
export class GifListComponent implements OnInit {
  trendingGifs: Gif[] = [];
  gif: any = [];
  selectedGif: Gif | undefined;

  constructor(private gifService: GifService) {}

  ngOnInit(): void {
    this.trendingGifs;
    this.getTrendingGifs();
  }

  getTrendingGifs(): void {
    this.gifService.getTrendingGifs().subscribe({
      next: (response: any) => {
        console.log(response.data)
        this.trendingGifs = response.data as Gif[];
      },
      error: (error) => console.log('Error getTrendingGifs', error),
    });
  }

  getGifDetails(gif: Gif): void {
    this.selectedGif = gif;
  }
}
