import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gif } from '../models/gif.model';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class GifService {
  private http = inject(HttpClient);
  //constructor(private http: HttpClient) {}

  getTrendingGifs(): Observable<Gif> {
    return this.http.get<Gif>(`${apiUrl}/trending?api_key=${apiKey}`);
  }

  getGifDetails(id: string | null): Observable<Gif> {
    if (!id) {
      throw new Error('ID cannot be null');
    }
    return this.http.get<Gif>(`${apiUrl}/${id}?api_key=${apiKey}`);
  }

  searchGifs(query: string): Observable<any> {
    return this.http.get(`${apiUrl}/search?api_key=${apiKey}&q=${query}`);
  }
}
