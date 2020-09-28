import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: any;

  constructor(private apiService: ApiService) {
  }
  ngOnInit(): void {
    this.apiService.getAllPosts().subscribe(data => {
      this.post = data;
      console.log(data);
    });
  }

}
