import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 
declare var $: any;

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {
  posts: any;
  slides: Object;
  
 

  constructor(private apiService: ApiService,config: NgbCarouselConfig) {
     
  }

  ngOnInit(): void {
    this.apiService.getAllPosts().subscribe(data => {
      this.posts = data;
     // console.log(data);
     this.functionA();
    });
    this.apiService.getAllSlides().subscribe(data => {
      this.slides = data['home_slider'];
      // console.log(data);
       
       this.functionB();
    });

    
  }
  functionA(){
    (<any>$('.flexslider')).flexslider({
      animation: "slide",
      animationLoop: false, 
      itemMargin: 5,
      directionNav:false
  });
}
functionB(){
  setTimeout(function(){ $('body').addClass('sliderloaded'); }, 2000);
  // .mobile-togle
  $('.mobile-togle').on('click',function() {
    //$(".sub-menu-mobile").toggleClass('width');
    console.log("click");
  });
    }
     
  
  ngAfterViewInit() {
     
    //Copy in all the js code from the script.js. Typescript will complain but it works just fine
    
  }
}
