var express = require('express');
var app = express();

app.listen(3000);

var myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
}

app.use(myLogger);

app.get('/', function (req, res) {
    console.log("Hello World");
    res.send('Hello World!');
});







