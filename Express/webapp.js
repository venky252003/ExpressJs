var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/index_view', function(req, res){
    res.render('index');
});

app.listen(3000);