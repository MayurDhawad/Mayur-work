import { Component, OnInit } from '@angular/core';
import { News } from '../news'
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news : News[] 
   

  selectedNews : News

  constructor( private _news : NewsService) { }

  ngOnInit() {
      this._news.getNews()
          .subscribe(
              res => this.news = res
          )
  }

  onSelectNews(news : any){
    this.selectedNews = news
    console.log(news)
  }

}
