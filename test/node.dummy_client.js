var socks = require('node-socks/socks.js');
var http = require('http');

console.log('Establishing connection to localhost');//+process.argv[2]);
var request = http.request({
    port: 3001,
    method: 'POST',
  }, function(res) {
    res.on('data', function(d) {
      console.log('receiving data::'+d);
    });
    res.on('end', function() {
      console.log('The response ended');
    });
    res.on('close', function() {
      console.log('The tunnel closed');
    });
  }
);
request.write('Testing the HTTP tunnel. (1) This should have come out the other end. Bla bla bla bla bla bla bla bla bla bla bla bla');
request.write('Testing the HTTP tunnel. (2) This should have come out the other end. Bla bla bla bla bla bla bla bla bla bla bla bla');
