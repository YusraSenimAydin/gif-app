import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GifService } from '../../services/giphy.service';
import { Gif } from '../../models/gif.model';

@Component({
  selector: 'app-gif-details',
  templateUrl: './gif-details.component.html',
  styleUrl: './gif-details.component.css'
})


export class GifDetailsComponent implements OnInit {
  gif!: Gif;

  constructor(
    private route: ActivatedRoute,
    private gifService: GifService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.gifService.getGifDetails(id).subscribe((data: any) => {
      console.log(data);
    });
  }
}

