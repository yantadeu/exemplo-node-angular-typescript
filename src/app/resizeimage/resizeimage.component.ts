import { Component } from '@angular/core';
import {Desafio} from '../desafio';
import {DesafioResizeImage} from './desafioResizeImage';
import { Ng2ImgMaxService } from 'ng2-img-max';
@Component({
  templateUrl: './resizeimage.component.html'
})

export class ResizeimageComponent {

  constructor(private ng2ImgMaxService: Ng2ImgMaxService) {
    // BUSCAR AS IMAGENS DO WEB SERVICE E GRAVAR NO MONGODB
    // COLOCAR AS IMAGENS NO COMPONENT.HTML E OFERECER FUNÇÃO DE RESIZE
    // CRIAR FUNÇÃO PARA RESIZE
    this.ng2ImgMaxService.resize([], 2000, 1000).subscribe((result)=>{
    });
  }
}

