function Triangle() {
  return {
    resolver : function(triangle) {
	  function resolverUltimaLinha() {
		var lastLine = triangle.pop(),
		    aboveLine = triangle.pop();
		for (var i = 0; i < aboveLine.length; i++)
		  aboveLine[i] = Math.max(
		    aboveLine[i] + lastLine[i],
		    aboveLine[i] + lastLine[i + 1]
		  );
		triangle.push(aboveLine);
	  }

	  do {
      resolverUltimaLinha();
	  } while (triangle.length > 1);
	  return triangle[0][0];
	}
 }
}
