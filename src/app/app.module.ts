import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import {SharedModule} from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjetsComponent } from './projets/projets.component';
import { ProjectComponent } from './project/project.component';
import { CategoryComponent } from './category/category.component';
import { OportuniteComponent } from './oportunite/oportunite.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AboutComponent,
    ContactComponent,
    ProjetsComponent,
    ProjectComponent,
    CategoryComponent,
    OportuniteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    NgbModule, 
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
