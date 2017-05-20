var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Welcome to Express Js Web App');    
});

app.listen(3000);
console.log('Server is listening');