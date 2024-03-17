import { Component, OnInit } from '@angular/core';
import { GifService } from '../../services/giphy.service';
import { Gif } from '../../models/gif.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchTerm = '';
  searchResults: Gif[] = [];

  constructor(private gifService: GifService
    ) {}

    ngOnInit(): void {
      if (this.searchTerm == ''){
        this.getTrendingGifs()
      }
    }

  search(): void {
    if (this.searchTerm.trim() !== '') {
      this.getSearchGifs(this.searchTerm);
    } else {
      this.getTrendingGifs();
    }
  }

  getSearchGifs(searchTerm:string): void {
    this.gifService.searchGifs(this.searchTerm).subscribe((results: any) => {
      this.searchResults = results.data;
    });
  }

  getTrendingGifs(): void {
    this.gifService.getTrendingGifs().subscribe({
      next: (response: any) => {
        this.searchResults = response.data as Gif[];
      },
      error: (error) => console.log('Error getTrendingGifs', error),
    });
  }
}
