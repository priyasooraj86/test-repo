import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable()
export class NewsService {
  key = '211ab0fa817642878b540c7d74010bdb';
  constructor(private http: HttpClient) { }
  getTopHeadLines(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=' + this.key);
  }
  getNewBySource(source){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.key);
  }
  getSources(){
    return this.http.get('https://newsapi.org/v2/sources?apiKey=' + this.key);
  }
}
