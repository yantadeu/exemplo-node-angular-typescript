export class Desafio {
  id: number;
  title: string;
  description: string;
  notes: string;
  result: number;
  duration: number;
  image: string;
  input: string;

  constructor(id: number, input: string) {
    this.id = id;
    this.description = '';
    this.notes = '';
    this.input = input;
    this.title = 'Desafio ' + this.id;
    this.result = 0;
    this.duration = 0;
    this.image = '';
  }

  resolverDesafio() {
  }

  duracaoDaExecucao() {
    var elapsedTime = 0;
    var startTime = new Date().getTime();
    var endTime = new Date().getTime();
    elapsedTime = endTime - startTime;
    var start = performance.now();
    this.resolverDesafio();
    this.duration = (performance.now() - start);
  }
}
