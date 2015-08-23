var path = require('path');
var app = require(path.resolve(__dirname, '../server'));

var flights = [
  {
    data_partida: "01-10-2015",
    data_chegada: "10-10-2015",
    numero: "2222",
    origem: "CNF",
    destino: "UIO",
    duracao: 6,
    lugares: 10,
    companhia: "Avianca"
  }
];
var dataSource = app.dataSources.flights;

dataSource.automigrate('flight', function(err) {
  if (err) console.log(err);

  var Flight = app.models.flight;
  var count = flights.length;

  flights.forEach(function(flight) {
    Flight.create(flight, function(err, record) {
      if (err) return console.log(err);

      console.log('Record created:', record);

      count--;

      if (count === 0) {
        console.log('done');
        dataSource.disconnect();
      }
    });
  });
});
