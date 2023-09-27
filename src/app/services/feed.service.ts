import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) {}

  load() {
    const frase = 'https://corsproxy.io/?https%3A%2F%2Fzenquotes.io%2Fapi%2Frandom';
    return this.http.get(frase);
  }
}
