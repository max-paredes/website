import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {
  cimg1: any = 'https://raw.githubusercontent.com/biker-ajayu/website/gh-pages/assets/images/logoBiker.jpeg';

  constructor() { }

  ngOnInit() {
  }

}
