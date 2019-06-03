var https = require('https'); 

function getHTML (options, callback) {

	https.get(options, function (response) {

  	response.setEncoding('utf8');
	
	//empty string variable
  	var html = '';

    //when data chunk received, push it into buffer
  	response.on('data', function(chunk) {
  		html += chunk;
  	}); 

    //when all data is received, console log the buffer
  	response.on('end', function() {
    printHTML(html);
    
    });

  });

  

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML (requestOptions, printHTML());