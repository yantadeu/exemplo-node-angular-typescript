import {Component} from '@angular/core';
import {Desafio} from './desafio';
import {DesafioHellTriangle} from './desafioHellTriangle';


@Component({
  template: `<div class="desafio" *ngFor="let desafio of desafios" title="{{ desafio.notes }}">
  <div class="mdl-grid">
   <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet"><img src="{{ desafio.image }}"/></div>
  </div>
  <br/>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet">
      <label>{{desafio.description}}</label>
    </div>
    <div class="mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet">
      <input id="{{desafio.id}}" class="mdl-textfield__input" [(ngModel)]="desafio.input"/>
    </div>
    <div class="mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet">
      <button type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" (click)="desafio.duracaoDaExecucao()">Resolver</button>
    </div>
    <div class="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet">
      Resultado: {{ desafio.result }}<br/>
      Duração: {{ desafio.duration | number:'1.00' }} milisegundos
    </div>
   
  </div>
</div>
`
})

export class HelltriangleComponent {
  public desafios: Desafio[] = [];

  constructor() {

    let desafioHellTriangle = new DesafioHellTriangle(1, '[[6],[3,5],[9,7,1],[4,6,8,4]]');
    this.desafios.push(desafioHellTriangle);
  }
}
