import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { RouterModule } from '@angular/router';
import { postRoutes } from './posts.routing';
import { ApiService } from '../core/services/api.service';



@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(postRoutes)
  ],
  providers: [ApiService]
})
export class PostsModule { }
