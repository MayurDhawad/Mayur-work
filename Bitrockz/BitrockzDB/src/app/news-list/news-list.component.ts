import { Component, OnInit, EventEmitter } from '@angular/core';
import { News } from '../news'

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
  inputs: ['news'],
  outputs: ['selectNews']
})
export class NewsListComponent implements OnInit {

  public selectNews = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onNewsClick(vid : News){
      this.selectNews.emit(vid)
  }

}
