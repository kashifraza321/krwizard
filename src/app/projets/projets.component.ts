import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent implements OnInit {
  posts: Object;

  
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getAllPosts().subscribe(data => {
      this.posts = data;
      console.log(data);
    });
  }

}
