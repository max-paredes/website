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
    { title: 'La Paz 360°', content: 'This is article one', img:'https://i.ibb.co/bHCbxdL/lapaz.jpg' },
    { title: 'Pura Pura Under', content: 'This is article Two', img:'https://i.ibb.co/18xzjJR/under.jpg' }];

  ngOnInit() {
  }

}
