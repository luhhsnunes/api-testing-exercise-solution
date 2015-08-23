var chakram = require('chakram'),
    expect = chakram.expect;

var URL = "http://localhost:3000/api/flights";
var contentType = "Content-Type:application/json";


describe("HTTP Requests on Flight API", function() {
    it("should create a new flight", function () {
        var response = chakram.post(URL,
          require('./post_data.json'),
          contentType
          );
        expect(response).to.have.status(200);
        return chakram.wait();
    });

  it("should update an existing flight", function () {
    var response = chakram.put(URL,
          require('./put_data.json'),
          contentType
          );
        expect(response).to.have.status(200);
        return chakram.wait();

  });

  it("should retrieve existing flights", function () {
    var response = chakram.get(URL);
    expect(response).to.have.status(200);
    return chakram.wait();

  });

});
