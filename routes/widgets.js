var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('widgets/index');
});

router.get('/music', function (req, res, next) {
    res.render('widgets/music');
});

router.get('/game',function(req,res,next){
    res.render('widgets/game') 
});

module.exports = router;