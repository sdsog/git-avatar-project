var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {

	var lowerCaseStr = html.toLowerCase();
	console.log(lowerCaseStr);
}


getHTML(requestOptions, printLowerCase);

// printUpperCase();