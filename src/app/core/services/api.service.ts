import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://projects.instantwebapps.com/idos/wp-json/wp/v2';
  baseUrl2 = 'https://projects.instantwebapps.com/idos/wp-json/acf/v3';
  baseUrl3 = 'https://projects.instantwebapps.com/idos/wp-json/wp/v2';
  
  constructor(public http: HttpClient) { }

  getAllPosts() {
    return this.http.get(`${this.baseUrl}/posts`);
  }
 
  getAllSlides() {
    return this.http.get(`${this.baseUrl2}/pages/1145/home_slider`);
  }
  getpages() {
    //return this.http.get(`${this.baseUrl3}/pages/${pageid}`);
    return this.http.get(`${this.baseUrl3}/pages/2`);
   }
   getpagescontact() {
    //return this.http.get(`${this.baseUrl3}/pages/${pageid}`);
    return this.http.get(`${this.baseUrl3}/pages/1173`);
   }
}
