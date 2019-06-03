// while https is built-in to Node, it is a module, so it must be required
var https = require('https');   

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    console.log('\n Chunk Received: \n:' + data);
  });

 });

}


getAndPrintHTMLChunks();


