var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('Get route called');
});

router.post('/', function(req, res){
    res.send('Post route Called');
});

//URL Binding
router.get('/:name', function(req, res){
    res.send('Get request called by ' + req.params.name);
})

module.exports = router;