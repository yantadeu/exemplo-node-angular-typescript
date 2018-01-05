import { Component } from '@angular/core';

import {DesafioHellTriangle} from './desafios/desafioHellTriangle';
import {Desafio} from './desafio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public desafios: Desafio[] = [];

  constructor() {

    let desafioHellTriangle = new DesafioHellTriangle(1, '[[6],[3,5],[9,7,1],[4,6,8,4]]');
    this.desafios.push(desafioHellTriangle);
  }
}
