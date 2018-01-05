import { Component } from '@angular/core';
import {Desafio} from '../desafio';
import {DesafioHellTriangle} from './desafioHellTriangle';

@Component({
  templateUrl: './helltriangle.component.html'
})

export class HelltriangleComponent {
  public desafios: Desafio[] = [];

  constructor() {

    let desafioHellTriangle = new DesafioHellTriangle(1, '[[6],[3,5],[9,7,1],[4,6,8,4]]');
    this.desafios.push(desafioHellTriangle);
  }
}
