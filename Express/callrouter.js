var express = require('express');
var app = express();

var route = require('./router.js');
app.use('/route', route);

app.listen(3000);