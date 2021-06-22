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
    { title: 'artcle one', content: 'This is article one', img:'https://www.motociclismo.es/uploads/s1/65/36/45/1/viajar-en-moto.jpeg' },
    { title: 'artcle two', content: 'This is article Two', img:'https://i.blogs.es/1dfc17/img-20171203-wa0019/1366_2000.jpg' },
    { title: 'artcle three', content: 'This is article Three', img:'https://www.soymotero.net/sites/default/files/2018-05/marruecos_continental_tkc_80_01.jpg' }];

  ngOnInit() {
  }

}
