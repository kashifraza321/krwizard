import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
   
  viewData: any;
   
  constructor(private apiService: ApiService) { 
    this.apiService.getpages().subscribe((data : any) => {
      console.log("Data from parent ::: " , JSON.stringify(data));
      this.viewData = data; 
       
 })
  }
  
  ngOnInit(): void {
     let rawdata = this.apiService.getpages();
     
       this.apiService.getpages().subscribe( (today) => {
        console.log(today);
     //  this.today = data;
    //setTimeout(function(){ $('body').addClass('sliderloaded'); }, 100);
  });
  }
  

    

}
