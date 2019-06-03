var https = require('https'); 

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

function getAndPrintHTML(options) {

  https.get(options, function (response) {

  	response.setEncoding('utf8');
	//empty string variable
  	var buffer = '';

    //when data chunk received, push it into buffer
  	response.on('data', function(chunk) {
  		buffer += chunk;
  	}); 

    //when all data is received, console log the buffer
  	response.on('end', function() {
    console.log(buffer);
    });

  });

}

getAndPrintHTML(requestOptions);

console.log(requestOptions);