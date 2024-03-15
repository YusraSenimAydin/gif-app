import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gif } from '../models/gif.model';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  apiKey = 'ZywBAttVhmyGu1WL3ULjOPzC2OxS6hej';
  apiUrl = 'https://api.giphy.com/v1/gifs';

  http = inject(HttpClient);
  //constructor(private http: HttpClient) {}

  getTrendingGifs(): Observable<any> {
    return this.http.get<Gif>(`${this.apiUrl}/trending?api_key=${this.apiKey}`);
  }

  getGifDetails(id: string | null): Observable<Gif> {
    if (!id) {
      throw new Error('ID cannot be null');
    }
    return this.http.get<Gif>(`${this.apiUrl}/${id}?api_key=${this.apiKey}`);
  }

  searchGifs(query: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/search?api_key=${this.apiKey}&q=${query}`
    );
  }
}
