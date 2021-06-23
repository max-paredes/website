import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-slide',
  templateUrl: './app-slide.component.html',
  styleUrls: ['./app-slide.component.css']
})
export class AppSlideComponent implements OnInit {

  constructor() { }

  simg1: any = 'http://www.emaverde.com.bo/images/parques-animaciones/ot-parques/purapura/pura2.jpg';
  simg2: any = 'https://3.bp.blogspot.com/-9AU8USnjCfA/V6ztFnj5ecI/AAAAAAAAKno/2gP0Zu8CXrcd-H7rHQ5R8y0dPPE1sMN2ACLcB/s1600/14.jpg';
  simg3: any = 'https://i0.wp.com/aventuraturistica.com/wp-content/uploads/2020/09/mirador-sallahumani-en-la-ciudad-de-el-alto.jpg?resize=601%2C362&ssl=1';
  simg4: any = 'https://www.lapaz.bo/ciudadmaravilla/wp-content/uploads/2017/11/IMG_7447-350x350.jpg';

  ngOnInit() {
  }

}
