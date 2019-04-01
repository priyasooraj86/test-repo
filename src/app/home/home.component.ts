import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[NewsService],


})
export class HomeComponent implements OnInit {
  mArticles: Array<any>;

  constructor(private newsService: NewsService){}
  ngOnInit() {
    this.newsService.getTopHeadLines()
  		.subscribe(
        data => {
          this.mArticles = data['articles'];
          // console.log(this.mArticles);
      }
    );
    console.log('out', this.mArticles);
  }
}
