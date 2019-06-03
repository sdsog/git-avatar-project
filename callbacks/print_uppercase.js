var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

	var upperCaseStr = html.toUpperCase();
	console.log(upperCaseStr);
}


getHTML(requestOptions, printUpperCase);

// printUpperCase();