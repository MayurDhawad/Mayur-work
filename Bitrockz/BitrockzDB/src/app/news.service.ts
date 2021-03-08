import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private _newsUrl = "http://localhost:4000/api/news"

  constructor(private http : HttpClient) { }

  getNews(){
    return this.http.get<any>(this._newsUrl)
  }

}
