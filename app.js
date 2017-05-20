var express = require('express');

var app = express();

app.use(express.static('public'));
app.
app.use(express.static('src/views'));

/*
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/index', function(req, res){
    res.render('index');
});*/

app.listen(3000, function(error){
    console.log('running server on port 3000');
});