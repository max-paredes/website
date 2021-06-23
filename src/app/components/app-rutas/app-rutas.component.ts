import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-rutas',
  templateUrl: './app-rutas.component.html',
  styleUrls: ['./app-rutas.component.css']
})
export class AppRutasComponent implements OnInit {

  constructor() { }
  

  blogimg: any = 'https://reimalice.github.io/ajayu-biker/assets/blog/blog.jpg';
  blogcontent: any = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, provident corrupti? Soluta deleniti eveniet
  dolorem ducimus vitae? Adipisci culpa amet earum molestias impedit. Fuga animi aliquid molestiae eligendi. Earum
  odio veritatis sint mollitia labore ipsam tenetur cum vitae, atque suscipit rem, corrupti obcaecati ullam nulla,
  sunt doloribus tempore fugiat quibusdam!`;

  posts: any[] = [
    { title: 'LA PAZ 360º', content: 'This is article one', by: 'jessica doe', on: '12/02/2017', img:'https://i.ibb.co/bHCbxdL/lapaz.jpg' },
    { title: 'PURA PURA UNDER', content: 'This is article Two', by: 'jhon smith', on: '02/07/2016' , img:'https://i.ibb.co/18xzjJR/under.jpg'}];



  ngOnInit() {
  }

}
