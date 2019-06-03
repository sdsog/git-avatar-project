var getHTML = require('./http-functions');
var printHTML = require ('./print_html')
var printLowercase = require('./print_lowercase');
var printUppercase = require('./print_uppercase');
var printReverse = require('./print_reverse');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML (requestOptions, printHTML());
printHTML (getHTML());

// printLowercase();

