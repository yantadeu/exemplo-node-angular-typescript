import {Component} from '@angular/core';
import {ImageService} from './image.service';
import {Image} from './image';
import {ObjectImages} from './objectImages';

@Component({
  template: `

    <div class="mdl-grid">
      <div *ngIf="imagens.length == 0">Carregando Imagens...</div>
      <div *ngFor="let image of imagens">
        <div class="mdl-cell mdl-cell--12-col">
          <div class="mdl-shadow--3dp">
            <div class="mdl-card__supporting-text">
              <img src="{{ image.url }}" id="{{ image.id }}" style="width: 320px;height: 240px"/>
            </div>
            <div class="mdl-card__actions mdl-card--border">
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                <div class="mdl-selectfield">
                  <label>Tamanho da Imagem</label>
                  <select class="browser-default" id="s-{{image.id}}" (change)="resizeImages($event.target.value, image.id)">
                    <option value="s">Small (320x240)</option>
                    <option value="m">Medium (384x288)</option>
                    <option value="l">Large (640x480)</option>
                  </select>
                </div>

              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  `
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

  /**
   *  <option value="320x240">Small</option>
   <option value="384x288">Medium</option>
   <option value="640x480">Large</option>
   */
  carregarImagens(): void {
    this.imagens = [];
    this.imageService.getImages()
      .subscribe((data: ObjectImages) => {
        let images = data.images;
        let cont = 0;
        for (let image of images) {
          image.id = ++cont;
          this.imagens.push(image);
        }
        console.log(this.imagens);
      }, error => console.log(error));
  }

  resizeImages(value: string, id: string): void {
    var el: HTMLElement = document.getElementById(id);
    el.removeAttribute('style');
    if (value === 's') {
      el.setAttribute('style', 'width: 320px;height: 240px');
    } else if (value === 'm') {
      el.setAttribute('style', 'width: 384px;height: 288px');
    } else {
      el.setAttribute('style', 'width: 640px;height: 480px');
    }


  }

}

