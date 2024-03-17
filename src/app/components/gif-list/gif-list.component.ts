import { Component, Input, OnInit } from '@angular/core';
import { GifService } from '../../services/giphy.service';
import { Gif } from '../../models/gif.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrl: './gif-list.component.css',
})
export class GifListComponent implements OnInit {
  @Input()  trendingGifs: Gif[] = [];
  selectedGif: Gif | undefined;
  gif!: Gif;


  constructor(private gifService: GifService , private router: Router) {}

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
    console.log('selected gif' , gif )
    this.router.navigate(['/details', gif.id]); // Kullanıcıyı detay sayfasına yönlendir

  }


}
