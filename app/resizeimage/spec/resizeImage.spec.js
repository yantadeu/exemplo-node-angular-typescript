describe("Resize_Image", function() {

  it("should show result value equal images.json", function() {
    var result = {
      "images": [
        {
          "url": "http://54.152.221.29/images/b737_5.jpg"
        },
        {
          "url": "http://54.152.221.29/images/b777_5.jpg"
        },
        {
          "url": "http://54.152.221.29/images/b737_3.jpg"
        },
        {
          "url": "http://54.152.221.29/images/b777_4.jpg"
        },
        {
          "url": "http://54.152.221.29/images/b777_3.jpg"
        },
        {
          "url": "http://54.152.221.29/images/b737_2.jpg"
        },
        {
          "url": "http://54.152.221.29/images/b777_2.jpg"
        },
        {
          "url": "http://54.152.221.29/images/b777_1.jpg"
        },
        {
          "url": "http://54.152.221.29/images/b737_4.jpg"
        },
        {
          "url": "http://54.152.221.29/images/b737_1.jpg"
        }
      ]
    }

    var refer = {
      "images": [
        {
          "url": "http://54.152.221.29/images/b737_5.jpg"
        },
        {
          "url": "http://54.152.221.29/images/b777_5.jpg"
        },
        {
          "url": "http://54.152.221.29/images/b737_3.jpg"
        },
        {
          "url": "http://54.152.221.29/images/b777_4.jpg"
        },
        {
          "url": "http://54.152.221.29/images/b777_3.jpg"
        },
        {
          "url": "http://54.152.221.29/images/b737_2.jpg"
        },
        {
          "url": "http://54.152.221.29/images/b777_2.jpg"
        },
        {
          "url": "http://54.152.221.29/images/b777_1.jpg"
        },
        {
          "url": "http://54.152.221.29/images/b737_4.jpg"
        },
        {
          "url": "http://54.152.221.29/images/b737_1.jpg"
        }
      ]
    };


    expect(result).toEqual(refer);
  });
});
