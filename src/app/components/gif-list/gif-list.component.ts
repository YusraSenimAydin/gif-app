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
  constructor(private gifService: GifService) {}

  ngOnInit(): void {
    this.trendingGifs;
    this.getTrendingGifs();
  }

  getTrendingGifs(): void {
    this.gifService.getTrendingGifs().subscribe((response: any) => {
      this.trendingGifs = response.data;
    });
  }

  getGifDetails(id: string): void {
    // Implement your logic to get details of a specific gif
  }
}
