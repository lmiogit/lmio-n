var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('widgets/index');
});

router.get('/music', function (req, res, next) {
    res.render('widgets/music');
});

module.exports = router;