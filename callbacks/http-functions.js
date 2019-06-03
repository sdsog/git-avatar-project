var https = require('https'); 

module.exports = function getHTML (options, callback) {
  //receives o
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
    callback(html);

    });
  });
};

 // function printHTML (html) {
 //    console.log(html);
 // }