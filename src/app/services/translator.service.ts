import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  constructor(private http: HttpClient) {}

  translate(payload: string) {
    const translate = "https://libretranslate.com/translate";

    return this.http.post(translate, {
      q: payload,
    });
  }
}
