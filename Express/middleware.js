var express = require('express');
var app = express();

//Log for all request
app.use('*', function(req, res, next){
    console.log("A request for middle received at " + Date.now());
	next();
});

app.get('/', function(req, res){
    res.send('Welcome to ExpressJS');
});

app.get('/middle', function(req, res){
    res.send('Get request Called');
});

app.listen(3000);
console.log('Server is running at port 3000');