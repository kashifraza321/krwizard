import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  viewData: any;
  
   
  constructor(private apiService: ApiService) { 
    this.apiService.getpagescontact().subscribe((data : any) => {
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
