import { Component, OnInit } from '@angular/core';
import { ApiService } from './core/services/api.service'; 

import {
  animate,
  style,
  transition,
  trigger,
  state
} from "@angular/animations";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
         
        height: '*',
        width: '100vw'
      })),
      state('out', style({
        opacity: '0',
        overflow: 'hidden',
        height: '0px',
        width: '0px'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class AppComponent  {
  title = 'idos';
  toggle:boolean = false;
  subsetting:string ='';
  helpMenuOpen: string;
  target: any;


  ngOnInit() {
    this.helpMenuOpen = 'out';
  }
  toggleHelpMenu(event): void {
    
    this.helpMenuOpen = this.helpMenuOpen === 'out' ? 'in' : 'out';
    event.target.classList.toggle('negative'); // To toggle
  }

 
}
