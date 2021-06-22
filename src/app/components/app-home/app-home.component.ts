import { Component, OnInit } from '@angular/core';

import { AppNavComponent } from '../app-nav/app-nav.component';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  constructor() { }

  cimg1: any = 'https://reimalice.github.io/ajayu-biker/assets/images/carousel/cimg1.jpg';
  cimg2: any = 'https://reimalice.github.io/ajayu-biker/assets/images/carousel/cimg2.jpg';

  ngOnInit() {
  }

}
