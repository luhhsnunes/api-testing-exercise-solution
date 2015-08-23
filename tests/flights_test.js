var chakram = require('chakram'),
    expect = chakram.expect;

var URL = "http://localhost:3000/api/flights";
var contentType = "Content-Type:application/json";


describe("HTTP Requests on Flight API", function() {
    it("should create a new flight", function () {
        var response = chakram.post(URL,
          require('./data.json'),
          contentType
          );
        expect(response).to.have.status(200);
        return chakram.wait();
    });

  xit("should update an existing flight", function () {

  });

  xit("should retrieve existing flights", function () {

  });

  xit("should delete an existing flight", function () {

  });

});
