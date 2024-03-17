import { Component } from '@angular/core';
import { GifService } from '../../services/giphy.service';
import { Gif } from '../../models/gif.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchTerm = '';
  searchResults: Gif[] = [];

  constructor(private gifService: GifService) {}

  search(): void {
    if (this.searchTerm.trim() !== '') {
      this.gifService.searchGifs(this.searchTerm).subscribe((results: any) => {
        this.searchResults = results.data;
        console.log(this.searchResults);
      });
    } else {
      this.searchResults = [];
    }
  }
}
