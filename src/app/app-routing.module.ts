import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './posts/post.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjetsComponent } from './projets/projets.component';
import { ProjectComponent } from './project/project.component';
import { CategoryComponent } from './category/category.component';
import { OportuniteComponent } from './oportunite/oportunite.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'home', component: HomeComponentComponent, pathMatch: 'full' },  
  // {
  //   path: 'post',
  //   loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  // },
  {
    path: 'apropos',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'products',
    component: PostComponent,
  },
  {
    path: 'projets',
    component: ProjetsComponent,
  },
  {
    path: 'oportunite',
    component: OportuniteComponent,
  },
  { path: 'project/:id', component: ProjectComponent },
  { path: 'category/:cat', component: CategoryComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
