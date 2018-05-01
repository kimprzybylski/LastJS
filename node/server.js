var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');

app.use(express.static(rootPath));

app.listen(4200);
console.log('Listening on port 4200...');