import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  posts: Object;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllPosts().subscribe(data => {
      this.posts = data;
      console.log(data);
    });
  }

}
