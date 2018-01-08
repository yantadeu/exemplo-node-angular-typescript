import {Component} from '@angular/core';
import {ImageService} from './image.service';
import {Image} from './image';


@Component({
  template: `<div class="desafio">
    <button (click)="carregarImagens()"></button>
  </div>`
})

export class ResizeimageComponent {
  imagens: Image[];
  imageService: ImageService
  constructor(private _imageService: ImageService) {
    this.imageService = _imageService;
    this.carregarImagens();
    // BUSCAR AS IMAGENS DO WEB SERVICE E GRAVAR NO MONGODB
    // COLOCAR AS IMAGENS NO COMPONENT.HTML E OFERECER FUNÇÃO DE RESIZE
    // CRIAR FUNÇÃO PARA RESIZE
  }

  carregarImagens(): void {
    this.imageService.getImages()
      .subscribe((data: Image[]) => {
        this.imagens = data;
        console.log(data);
      }, error => console.log(error));
  }

}

