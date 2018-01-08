export class Triangle {

  constructor() {
  }

  resolver(triangle) {
    try{
      do {
        this.resolverUltimaLinha(triangle);
      } while (triangle.length > 1);

      console.log(triangle);

      return triangle[0][0];
    }catch(err){
      return err;
    }
  }

  resolverUltimaLinha(triangle) {
    var lastLine = triangle.pop(),
      aboveLine = triangle.pop();
    for(var i = 0; i < aboveLine.length; i++)
      aboveLine[i] = Math.max(
        aboveLine[i] + lastLine[i],
        aboveLine[i] + lastLine[i + 1]
      );
    triangle.push(aboveLine);
  }

}
