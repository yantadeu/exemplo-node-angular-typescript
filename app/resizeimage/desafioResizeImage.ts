import {Desafio} from '../helltriangle/desafio';

export class DesafioResizeImage extends Desafio {

    constructor(id: number, input: string) {
        super(id, input);
        this.title = 'B2W - Desafio 2';
        this.description = 'Ler imagens de WS e redimensionar';
        this.image = '/assets/images/hell_triangle.png';
    }

    resolverDesafio() {

    };
}
