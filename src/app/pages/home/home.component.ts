import { Component } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service';
import { TranslatorService } from 'src/app/services/translator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: any = {};

  constructor(
    private readonly feed: FeedService,
    private readonly translator: TranslatorService,
  ) {}

  ngOnInit() {
    this.loadFeed();
  }

  loadFeed(): void {
    this.feed.load()
    .subscribe({
      next: (response:any) =>{
        const {q: frase, a: autor} = response[0];
        this.data = {
          frase,
          autor,
        };
      }
    });
  }

  translate(frase: string): void {
    this.translator.translate(frase).subscribe({
      next: (response:any) =>{
        this.data = {
          ...this.data,
          frase: response,
        };
      }
    });
  }

  newPhrase(): void {
    this.loadFeed();
  }
}
