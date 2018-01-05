import {Desafio} from '../../../src/app/desafio';
import {Triangle} from '../../../src/app/triangle';

export class DesafioHellTriangle extends Desafio {

    constructor(id: number, input: string) {
        super(id, input);
        this.title = 'B2W - Desafio 1';
        this.description = 'Insira um array multidimencional seguindo o exemplo abaixo';
        this.image = '/assets/images/hell_triangle.png';
    }

    resolverDesafio() {
        var array = JSON.parse(this.input);

        var triangle = new Triangle();

        this.result = triangle.resolver(array);

        this.notes = 'Desafio número 1';
    };
}
