import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://projects.instantwebapps.com/news/wp-json/wp/v2';

  constructor(public http: HttpClient) { }

  getAllPosts() {
    return this.http.get(`${this.baseUrl}/posts`);
  }
}
