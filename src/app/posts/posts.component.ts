import { Component, OnInit } from "@angular/core";
import { NewsService } from '../services/news.service';
@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
  providers:[NewsService]
})
export class PostsComponent implements OnInit {
  mArticles: Array<any>;
  mSources: Array<any>;
  filterSource ='google-news';
  constructor(private newsService: NewsService){}
  ngOnInit() {
    this.newsService.getTopHeadLines()
  		.subscribe(
  			data => this.mArticles = data['articles']
    );
    this.getnewsSources();
  }

  filterNews(source) {

    this.newsService.getNewBySource(source)
    .subscribe(
      data  => this.mArticles = data['articles']
    );
  }
  getnewsSources() {
    this.newsService.getSources()
      .subscribe(
        data => this.mSources = data['sources']
      );
  }
}
