var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('Get route called');
});

router.post('/', function(req, res){
    res.send('Post route Called');
});

module.exports = router;