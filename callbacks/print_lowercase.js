var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {

console.log("this is lowercase: " + html);

}

getHTML(requestOptions, printLowerCase);

printLowerCase();