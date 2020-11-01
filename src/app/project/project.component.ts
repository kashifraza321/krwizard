import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';
 

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  products: any;
  _router: any;
  sub: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProject(11).subscribe(data => {
      this.products = data;
      console.log(data);
    });
    //this.products=this.productService.getProject();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
  onBack(): void {
     this._router.navigate(['product']);
  }

}
