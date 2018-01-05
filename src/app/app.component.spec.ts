import {Triangle} from './triangle';

describe('Hell Triangle', ()  => {
  var triangle;
  var input = [[6],[3,5],[9,7,1],[4,6,8,4]];

  beforeEach(function() {
    triangle = new Triangle();
  });

  it("should show result value equal to 26 for input array [[6],[3,5],[9,7,1],[4,6,8,4]]", function() {
    var result = triangle.resolver(input);
    expect(result).toEqual(26);
  });
});
