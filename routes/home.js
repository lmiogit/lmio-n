var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    if (req.headers.accesstype == 'pjax') {
        res.render('home');
    } else {
        res.redirect('/');
    }
});

module.exports = router;
