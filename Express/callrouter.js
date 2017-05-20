var express = require('express');
var app = express();

var route = require('./router.js');
app.use('/route', route);

app.listen(3000);
console.log('Server is running at port 3000');