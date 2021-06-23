import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-articles',
  templateUrl: './app-articles.component.html',
  styleUrls: ['./app-articles.component.css']
})
export class AppArticlesComponent implements OnInit {

  constructor() { }

  artimg: any = 'https://reimalice.github.io/ajayu-biker/assets/articles/img.jpg';

  articles: any[] = [
    { title: 'La Paz 360°', content: 'This is article one', img:'https://i.ibb.co/hW0cpCt/Whats-App-Image-2021-06-22-at-3-50-50-PM-2.jpg' },
    { title: 'Pura Pura Under', content: 'This is article Two', img:'https://i.ibb.co/5jyDzg9/Whats-App-Image-2021-06-22-at-3-50-50-PM-1.jpg' }];

  ngOnInit() {
  }

}
